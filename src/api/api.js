import axios from 'axios'
import { getAllAC, getRegAC,getCountryAC,getSearchAC} from '../store/store'

const instance = axios.create({
    baseURL : 'https://restcountries.com/v3.1'
})

export const API = {
    getAll(dispatch){
        instance.get('/all')
        .then((res) => dispatch(getAllAC(res.data)))
    },
    getRegion(dispatch,region){
        instance.get(`/region/${region}`)
        .then((res) => dispatch(getRegAC(res.data)))
    },
    getCountry(dispatch,name){
        instance.get(`/name/${name}`)
        .then((res)=> dispatch(getCountryAC(res.data)))
    },
    getSearch(dispatch,name){
        instance.get(`/name/${name}`)
        .then((res)=> dispatch(getSearchAC(res.data)))
    }
}