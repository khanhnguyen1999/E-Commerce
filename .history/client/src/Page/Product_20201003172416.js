import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {listRelated} from './apiCore'
import Card from './Cart'

export default function Product(props){
    const [product,setProduct]=useState({})
    const [error,setError]=useState(false)
    const loadSingleProduct = (productId)=>{
        read().then(data=>{
            if(data.err){
                setError(data.err)
            }
            else{
                setProduct(data)
            }
        })
    }
    useEffect(()=>{
        const productId = productId.match.params.productiId
        loadSingleProduct()
    },[])
    console.log("product ",productId.match.params.productiId)
    return(
        <Layout title="Product Page" description="Nodejs React E commerce App" className="container">
            <h2 className="mb-4">Single Product</h2>
            <div className="row">
                {JSON.stringify(product)}
            </div>
        </Layout>
    )
}