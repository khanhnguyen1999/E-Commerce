import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {listRelated} from './apiCore'
import Card from './Cart'

export default function Product(productId){
    const [product,setProduct]=useState({})
    const [error,setError]=useState(false)
    useEffect(()=>{
        const productId = productId.match.params.productiId
    },[])
    console.log("product ",productId.match.params.productiId)
    return(
        <>
        {
            // productId
        }
        </>
    )
}