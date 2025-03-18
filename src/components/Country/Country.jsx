import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../Data/context'
import { NavLink, useParams } from 'react-router-dom'
import { API } from '../../api/api'
import style from './Country.module.css'


const Country = () => {
    const {dispatch,country} = useContext(MyContext)
    const {name} = useParams()

    useEffect(()=>{
        API.getCountry(dispatch,name)
    },[name])

    const newCountry = country[0]
    
  return (
        <div className={style.card}>
           
            <h1 className={style.text}>{newCountry?.name?.common}</h1>
            <img src={newCountry?.flags?.png} width={400}/>
            <h2 className={style.text}>Area - {newCountry?.area}km<sup>2</sup></h2>
            <h2 className={style.text}>Population - {newCountry?.population} p.</h2>
            <NavLink style={{textDecoration: 'none',color:'white'}} to={newCountry?.maps.googleMaps}>Location</NavLink>
        </div>
  )
}

export default Country