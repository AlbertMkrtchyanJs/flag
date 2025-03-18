const GET_ALL = 'all'
const GET_COUNTRY = 'country'
const GET_REG = 'reg'
const CHANGE_TEXT = 'change'
const GET_SEARCH = 'search'
export const initialState = {
  countries : [],
  country: [],
  text: '',
  search: []
}

export const reducer = (initialState,action) =>{
    switch(action.type){
        case GET_ALL : 
        return {
            ...initialState,
            countries : action.payload
        }
        case CHANGE_TEXT : 
        return {
            ...initialState,
            text : action.payload
        }
        case GET_SEARCH :
            return{
             ...initialState,
             search : action.payload   
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

export const changeTextAC = (text) => ({type: CHANGE_TEXT , payload : text})
export const getAllAC = (data) => ({type: GET_ALL , payload : data})
export const getCountryAC = (data) => ({type: GET_COUNTRY, payload : data})
export const getRegAC = (data) => ({type: GET_REG , payload : data})
export const getSearchAC = (data) => ({type: GET_SEARCH , payload : data})