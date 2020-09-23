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
    const newPostForm = ()=>{
        return (
            <form className="mb-3" onSubmit={onSubmit}>
                <h4>Post Photo</h4>
                <div className="form-group">
                    <label className="btn btn-secondary">
                        <input type="file" name="photo" accept="image/*"/>
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea onChange={handleChange('description')} type="text" className="form-control" value={description}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input onChange={handleChange('price')} type="number" className="form-control" value={price}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select onChange={handleChange('category')} className="form-control">
                        <option value="5f67c7da06504222c01c5afc">Python</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Shipping</label>
                    <select onChange={handleChange('shipping')} className="form-control">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Quantity</label>
                    <input onChange={handleChange('quantity')} type="text" className="form-control" value={quantity}/>
                </div>
                <button className="btn btn-outline-primary">Create Product</button>
            </form>
        )
    }
    const handleChange = field => e=>{
        const value = name === 'photo'?e.target.files[0]:e.target.value
        formData.set(name,value)
        setValues({
            ...values,
            [field]:e.target.value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        setValues({...values,error:'',loading:true})
        createProduct(user._id,token,form)
    }
    useEffect(()=>{
        setValues({
            ...values,
            formData:new formData()
        })
    },[])
    return (
        <Layout title="Add a new Product" description={`G'day !`} className="container">
            <div className="row">
                <div className="col-md-12">
                    {newPostForm()}
                   <Link to="/admin/dashboard" className="text-warning">Back to the Dashboard</Link>
                </div>
            </div>
        </Layout>
    )
}