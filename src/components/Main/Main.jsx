import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Main.module.css'

const Main = ({country}) => {
    return (
        <div className={style.mainCard}> 
        <p className={style.pTag}>{country?.name?.common}</p>
        <NavLink to={country?.maps?.googleMaps}>
        <img className={style.img} src={country?.flags?.png} width={250} height={150}/>
        </NavLink>
    </div>
  )
}

export default Main