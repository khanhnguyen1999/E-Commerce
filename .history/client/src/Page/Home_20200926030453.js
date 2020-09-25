import React, { useState } from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'

export default function Home(){
    const [productsBySell,setProductsBySell]=useState([])
    const [productsByArrival,setProductsByArrival]=useState([])
    const [error,setError]=useState(false)
    const loadProductsBySell = ()=>{
        getProducts('sold').then(data=>{
            if(data.err){
                setError(data.err)
            }
            else{
                setProductsBySell(data)
            }
        })
    }
    const loadProductsByArrival = ()=>{
        getProducts('createAt').then(data=>{
            if(data.err){
                setError(data.err)
            }
            else{
                setProductsByArrival(data)
            }
        })
    }
    return(
        <Layout title="Home Page" description="Nodejs React E commerce App">
            ...
        </Layout>
    )
}