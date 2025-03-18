import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../Data/context'
import { NavLink, useParams } from 'react-router-dom'
import { API } from '../../api/api'

const Country = () => {
    const {dispatch,countries} = useContext(MyContext)
    const {name} = useParams()

    useEffect(()=>{
        API.getCountry(dispatch,name)
    })

   
    
  return (
    <div>
        <>
        <div>
            <h1>{countries?.name?.common}</h1>
        </div>
        <div>
            <img src={countries?.flags?.png}/>
            <h2>Area - {countries?.area}km<sup>2</sup></h2>
            <h2>Population - {countries?.population} p.</h2>
            <NavLink to={countries?.maps?.googleMaps}>Location</NavLink>
        </div>
        </>
    </div>
  )
}

export default Country