
import { useEffect,useReducer } from 'react'
import { initialState, reducer } from './store/store'
import { API } from './api/api'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { MyContext } from './Data/context'

import Layout from './components/Layout/Layout'
import Country from './components/Country/Country'


import './App.css'

function App({reg}) {

const [state,dispatch] = useReducer(reducer,initialState)



useEffect(() => {
 API.getAll(dispatch)
},[])

  return (
    <div className='vzgo'>
    <MyContext.Provider value={{
       reg,
      dispatch,
      countries : state.countries,
      country: state.country,
      text : state.text,
      search : state.search
    }}>
      <Routes>
        <Route path='/' element={<Layout/> }>
        <Route index element={<Home/> }/>
        <Route path='/flag/:name' element={<Country/>}/>
        </Route>
      </Routes>
    </MyContext.Provider>
  
    </div>
  )
}

export default App
