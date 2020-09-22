import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import createCategory from './apiAdmin'


export default function AddCategory(){
    const [values,setValues]=useState({
        name:"",
        error:false,
        success:false
    })
    const {user,token}=isAuthenticated()
    const handleChange = (e)=>{
        setValues({
            ...values,
            name:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setValues({
            ...values,
            error:'',
            success:false
        })
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data.err){
                setValues({
                    ...values,
                    error:data.err,
                })
            }else{
                setValues({
                    ...values,
                    error:"",
                    success:true
                })
            }
        })
    }
    const formCreate = ()=>(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange}/>
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    )
    const showSuccess = ()=>(
        <div className="alert alert-primary" style={{display:success?'':"none"}}>
            New account is created. Please <Link to="/signin">SignIn</Link>
        </div>
    )
    
    return (
        <Layout title="Add a new Category" description={`G'day !`} className="container">
            <div className="row">
                <div className="col-md-8">
                   {formCreate()}
                </div>
            </div>
        </Layout>
    )
}