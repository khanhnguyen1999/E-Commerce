import React,{useState,useEffect,useRef} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import {CreateProduct} from './apiAdmin'


export default function AddProduct(){
    const form = useRef(null)
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


    // const handleChange = name => e =>{
    //     const formData = new FormData()
    //     const value = 
    //         name === 'photo' ? e.target.files[0] : e.target.value
    //     formData.set(name,value)    
    //     setValues({
    //         ...values,
    //         [name]:value
    //     })
    // } 

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     const data = new FormData(form.current)
    //     setValues({...values,error:'',loading:true})
    //     CreateProduct(user._id,token,formData)
    //     .then(data=>{
    //         if(data?.err){
    //             setValues({...values,error:data.err})
    //         }else{
    //             setValues({
    //                 ...values,
    //                 name:"",
    //                 description:"",
    //                 photo:"",
    //                 price:"",
    //                 quantity:"",
    //                 loading:false,
    //                 createProduct:data.name,
    //             })
    //         }
    //     })
    // } 

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("chec ",e.target.name.id)
        // console.log("event target id ",id)
        const data = new FormData(e.currentTarget)
        console.log("data ",data)
        const message = data.get(e.target.id)
        console.log("message ",message)
        data.append(e.target.id,message)
        console.log("mess ",data.get(e.target.id))
        // CreateProduct(user._id,token,)
    }

    const newPostForm = ()=>{
        return (
            <form ref={form} className="mb-3" onSubmit={handleSubmit}>
                <h4>Post Photo</h4>
                <div className="form-group">
                    <label className="btn btn-secondary">
                        <input id="photo" type="file" name="photo" accept="image/*"/>
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input id="name" name="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea id="description" name="description" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input id="price" name="price" type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select id="category" name="category" className="form-control">
                        <option value="5f67c7da06504222c01c5afc">Python</option>
                        <option value="5f67c7da06504222c01c5afc">PHP</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Shipping</label>
                    <select id="shipping" name="shipping" className="form-control">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Quantity</label>
                    <input id="quantity" name="quantity" type="text" className="form-control"/>
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