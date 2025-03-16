
import { useEffect,useReducer } from 'react'
import { initialState, reducer } from './store/store'
import './App.css'
import { API } from './api/api'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'


function App() {

const [state,dispatch] = useReducer(reducer,initialState)

console.log(state);

useEffect(() => {
 API.getAll(dispatch)
},[])

  return (
    <div className='vzgo'>
    <Header dispatch={dispatch}/>
      <Routes>
        <Route path='/' element={<Home state ={state} />}/>
      </Routes>
    </div>
  )
}

export default App
