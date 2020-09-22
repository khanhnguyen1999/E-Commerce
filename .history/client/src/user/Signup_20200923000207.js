import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {Link} from 'react-router-dom'
import {API} from '../config'

export default function Signup(){
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })
    const {name,email,password,success,error}=values
   
    const handleChange = name => e =>{
        setValues({
            ...values,
            error:false,
            [name]:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            if(data?.error){
                 setValues({
                     ...values,error:data.error,success:false
                 })
            }
            setValues({
                ...values,
                name:'',
                email:'',
                password:'',
                error:'',
                success:true
            })
        })
    }
    const showError = ()=>(
        <div className="alert alert-danger" style={{display:error?'':"none"}}>
            {error}
        </div>
    )

    const showSuccess = ()=>(
        <div className="alert alert-primary" style={{display:success?'':"none"}}>
            New account is created. Please <Link to="/signin">SignIn</Link>
        </div>
    )
    
    const signUpForm = ()=>(
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input value={name} onChange={handleChange("name")} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input value={email} onChange={handleChange("email")} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input value={password} onChange={handleChange("password")} type="password" className="form-control"/>
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
    return(
        <>
            <Layout title="Signup Page" description="Signup to Nodejs React E commerce App" className="container col-md-8 offset-md-2">
                {showSuccess()}
                {showError()}
                {signUpForm()}
            </Layout>
        </>
    )
}