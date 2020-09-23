import React,{useState,useEffect} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import  {createProduct} from './apiAdmin'

export default function AddProduct(){
    const {user,token}=isAuthenticated()
    const [values,setValues]=useState({
        name:'',
        description:'',
        price:'',
        categories:[],
        catorogy:'',
        shipping:'',
        quantity:'',
        photo:'',
        loading:false,
        error:'',
        createProduct:'',
        redirectToProfile:false,
        formData:''
    })
    const {
        name,description,price,categories,catorogy,shipping,quantity,photo,loading,error,createProduct,redirectToProfile,formData
    } = values
    return (
        <Layout title="Add a new Product" description={`G'day !`} className="container">
            <div className="row">
                <div className="col-md-8">
                    
                   <Link to="/admin/dashboard" className="text-warning">Back to the Dashboard</Link>
                </div>
            </div>
        </Layout>
    )
}