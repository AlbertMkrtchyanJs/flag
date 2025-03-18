const GET_ALL = 'all'
const GET_COUNTRY = 'country'
const GET_REG = 'reg'

export const initialState = {
  countries : []
 
}

export const reducer = (initialState,action) =>{
    switch(action.type){
        case GET_ALL : 
        return {
            ...initialState,
            countries : action.payload
        }
        case GET_REG : 
        return{
            ...initialState,
            countries : action.payload
        }
        case GET_COUNTRY : 
        return {
            ...initialState,
            country : action.payload
        }
        default:
            return initialState
    }
}

export const getAllAC = (data) => ({type: GET_ALL , payload : data})
export const getCountryAC = (data) => ({type: GET_COUNTRY, payload : data})
export const getRegAC = (data) => ({type : GET_REG , payload : data})