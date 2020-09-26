import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'
import {getCategories} from './apiCore'

export default function Shop(){
    const [values,setValues]=useState({
        error:'',
        success:false
    })
    const {
        error,success
    } = values
    const showSuccess = ()=>(
        <div className="alert alert-primary" style={{display:success?'':"none"}}>
            Create Product Successs
        </div>
    )
    const showError = ()=>(
        <div className="alert alert-danger" style={{display:error?'':"none"}}>
            Create Product failure
        </div>
    )
    const showProduct = ()=>{
        getCategories()
        .then(data=>{
            if(data?.err){
                setValues({
                    ...values,
                    error:data.err,
                })
            }
            else{
                setValues({
                    ...values,
                    error:"",
                    success:true
                })
            }
        })
    }
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                    {showProduct()}
                </div>
            </div>
         </Layout>
    )
}