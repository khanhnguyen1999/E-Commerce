import React, { useState } from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'

export default function Home(){
    const [productsBySell,setProductsBySell]=useState([])
    const [productsByArrival,setProductsByArrival]=useState([])
    const [productsBySell,setProductsBySell]=useState([])
    return(
        <Layout title="Home Page" description="Nodejs React E commerce App">
            ...
        </Layout>
    )
}