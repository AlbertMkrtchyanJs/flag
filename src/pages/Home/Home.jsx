import React, { useContext } from 'react'
import Main from '../../components/Main/Main'

import style from './Home.module.css'
import { MyContext } from '../../Data/context'

const Home = () => {
  const {countries} = useContext(MyContext)
  return (
    <div className={style.home}>{
        countries.map((country)=> {
            return <>
            <Main country={country} key={country.name.common}/>
            </>
        })
        }
    </div>
  )
}

export default Home