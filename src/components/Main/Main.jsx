import React from 'react'

const Main = ({country}) => {
  return (
    <div> 
        <p>{country?.name?.common}</p>
        <img src={country?.flags?.png} width={250} height={150}/>
    </div>
  )
}

export default Main