import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'

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