import React,{useState,useEffect} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import {CreateProduct} from './apiAdmin'

export default function AddProduct(){
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
    const {user,token}=isAuthenticated()
    const {
        name,description,price,categories,catorogy,shipping,quantity,photo,loading,error,createProduct,redirectToProfile,formData
    } = values
    useEffect(()=>{
        setValues({
            ...values,
            formData: new FormData()
        })
        console.log("form ",formData)
    },[])



    const handleSubmit = (e)=>{
        e.preventDefault()
        setValues({...values,error:'',loading:true})
        console.log(formData)
        CreateProduct(user._id,token,formData)
        .then(data=>{
            if(data.err){
                setValues({...values,error:data.err})
            }else{
                setValues({
                    ...values,
                    name:"",
                    description:"",
                    photo:"",
                    price:"",
                    quantity:"",
                    loading:false,
                    createProduct:data.name,
                })
            }
        })
    } 

    
    const handleChange = field => e=>{
        const value = 
            name === 'photo' ? e.target.files[0] : e.target.value
        console.log("value ",values)
        formData.set(name,value)    
        setValues({
            ...values,
            [field]:value
        })
    } 


    const newPostForm = ()=>{
        return (
            <form className="mb-3" onSubmit={handleSubmit}>
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
                        <option value="5f67c7da06504222c01c5afc">PHP</option>
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



    const showSuccess = ()=>(
        <div className="alert alert-primary" style={{display:values.success?'':"none"}}>
            Create Product Successs
        </div>
    )
    const showError = ()=>(
        <div className="alert alert-danger" style={{display:values.error?'':"none"}}>
            Create Product failure
        </div>
    )

    return (
        <Layout title="Add a new Product" description={`G'day !`} className="container">
            <div className="row">
                <div className="col-md-12">
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                   <Link to="/admin/dashboard" className="text-warning">Back to the Dashboard</Link>
                </div>
            </div>
        </Layout>
    )
}