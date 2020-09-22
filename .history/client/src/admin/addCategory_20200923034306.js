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
    return (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text"/>
            </div>
        </form>
    )
}