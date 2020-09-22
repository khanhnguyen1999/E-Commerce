import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'

export default function addCategory(){
    const [values,setValues]=useState({
        name:"",
        error:false,
        success:false
    })
    const {user,token}=isAuthenticated()
    const handleChange = ()=>{
        setValues({
            ...values,
            name:e.target.value
        })
    }
    const handleChange = (e)=>{
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
                <input type="text" className="form-control" onChange={handleChange()}/>
                <button className="btn btn-outline-primary">Create Category</button>
            </div>
        </form>
    )
    return (
        <Layout title="Add a new Category" description={`G'day ${name}!`} className="container">
            <div className="row">
                <div className="col-3">
                   {formCreate()}
                </div>
            </div>
        </Layout>
    )
}