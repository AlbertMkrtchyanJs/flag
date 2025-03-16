import React from 'react'

import style from './Header.module.css'
import { API } from '../../api/api'


const reg = ['Europe','Africa','Oceania','Asia','Americas','Antarctic']
const Header = ({dispatch}) => {

    const filterReg = (r) => {
        API.getRegion(dispatch,r)
    }

  return (
    <div className={style.header}>
        {
        reg.map((r) => <button key={r} onClick={() => filterReg(r)}>{r}</button>)
        }
        <>
        <input />
        </>
    </div>
  )
}

export default Header