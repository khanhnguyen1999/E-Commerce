import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {read,listRelated} from './apiCore'
import Card from './Cart'

export default function Product(props){
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const productId = props.match.params.productId
        console.log("productid ",productId)
        loadSingleProduct()
    },[])
    const [error,setError]=useState(false)
    const loadSingleProduct = (productId)=>{
        console.log("productid ",productId)
        read(productId).then(data=>{
            if(data?.err){
                setError(data.err)
            }
            else{
                setProduct(data)
            }
        })
    }
    return(
        <Layout title="Product Page" description="Nodejs React E commerce App" className="container">
            <h2 className="mb-4">Single Product</h2>
            <div className="row">
                {JSON.stringify(product)}
            </div>
        </Layout>
    )
}