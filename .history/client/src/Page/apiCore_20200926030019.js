import {API} from '../config'


export const getProducts = (sortBy) =>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}