import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {read,listRelated} from './apiCore'
import Card from './Cart'

export default function Product(props){
    const [product,setProduct]=useState({})
    const [productId,setProductId]=useState({})
    useEffect(()=>{
        // setProductId(props.match.params.productId)
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    },[])
    const [error,setError]=useState(false)
    const [related,setRelated]=useState({})
    const loadSingleProduct = (productId)=>{
        console.log("productid ",productId)
        read(productId).then(data=>{
            if(data?.err){
                setError(data.err)
            }
            else{
                setProduct(data)
                listRelated(data._id).then(data=>{
                    if(data?.err){
                        setError(data.err)
                    }
                    else{
                        setRelated(data)
                    }
                })
            }
        })
    }
    return(
        <Layout title={product && product.name} description="Nodejs React E commerce App" className="container">
            <h2 className="mb-4">Single Product</h2>
            <div className="row">
                {/* {JSON.stringify(product)} */}
                <div className="col-8">
                    <Card product={product} showView = {false}/>
                </div>
               <div className="col-4">
                   {
                       related.map((p,i)=>{
                        <Card product={p}/>
                       })
                   }
               </div>
            </div>
        </Layout>
    )
}