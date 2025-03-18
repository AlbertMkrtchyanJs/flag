import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Main.module.css'

const Main = ({country}) => {
    return (
      <NavLink to={`/flag/${country.name.common}`}>
        <div className={style.mainCard}> 
        <p className={style.pTag}>{country?.name?.common}</p>
        <img className={style.img} src={country?.flags?.png} width={250} height={150}/>
        </div>
      </NavLink>
  )
}

export default Main