import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Cart from './Cart'

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
    useEffect(()=>{
        loadProductsByArrival()
        loadProductsBySell()
    },[])
    return(
        <Layout title="Home Page" description="Nodejs React E commerce App">
            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                 {
                    productsBySell.map((product,i)=>{
                        return(
                            <Cart key={i} product={product}/>
                        )
                    })
                }
            </div>
           
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                  {
                productsByArrival.map((product,i)=>{
                    return(
                        <Cart key={i} product={product}/>
                    )
                })
            }
            </div>
          
            
        </Layout>
    )
}