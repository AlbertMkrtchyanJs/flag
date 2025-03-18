import React, { useContext } from 'react'
import { API } from '../../api/api'

import style from './Header.module.css'
import { MyContext } from '../../Data/context'


const Header = () => {
  const {reg,dispatch} = useContext(MyContext)
    
  const filterReg = (r) => {
        API.getRegion(dispatch,r)
    }

  return (
    <div className={style.header}>
        <button className={style.butt} onClick={() => API.getAll(dispatch)}>All</button>
        {
        reg.map((r) => <button className={style.butt} key={r} onClick={() => filterReg(r)}>{r}</button>)
        }
        <>
        
        <input type='saerch'/>
        </>
    </div>
  )
}

export default Header