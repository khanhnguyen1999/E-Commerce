import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'

export default function addCategory(){
    const [values,setValues]=useState({
        name:"",
        error:"",
        success:""
    })
    const {user,token}=isAuthenticated()
    const handleChange = ()=>{
        setValues({
            ...values,
            name:e.target.value
        })
    }
    return (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange}/>
            </div>
        </form>
    )
}