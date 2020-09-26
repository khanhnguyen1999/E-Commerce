import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'
import {getCategories} from './apiCore'
import Checkbox from './Checkbox'

export default function Shop(){
    const [categories,setCategories]= useState([])
    const [error,setError]=useState(false)
    const showProduct = ()=>{
        getCategories()
        .then(data=>{
            if(data?.err){
                setError(data.err)
            }else{
                setCategories(data)
            }
        })
    }
    useEffect(()=>{
        showProduct()
    },[])
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
            <div className="row">
                <div className="col-4">
                    <Checkbox categories={categories}/>
                </div>
                <div className="col-8">
                    {showProduct()}
                </div>
            </div>
         </Layout>
    )
}