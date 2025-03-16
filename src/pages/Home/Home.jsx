import React from 'react'
import Main from '../../components/Main/Main'

import style from './Home.module.css'

const Home = ({state}) => {
  return (
    <div className={style.home}>{
        state.countries.map((country)=> {
            return <>
            <Main country={country} key={country.name.common}/>
            </>
        })
        }
    </div>
  )
}

export default Home