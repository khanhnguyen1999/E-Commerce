import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {Link} from 'react-router-dom'
import {signin} from '../auth'


export default function Signin(){
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        success:false
    })
    const {email,password,success,error}=values
   
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
        signin({email,password})
        .then(data=>{
            if(data?.error){
                 setValues({
                     ...values,error:data.error,success:false
                 })
            }
            setValues({
                ...values,
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
    
    const signInForm = ()=>(
        <form>
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
        <Layout title="Signin Page" description="Signin to Nodejs React E commerce App" className="container">
                {showSuccess()}
                {showError()}
                {signInForm()}
        </Layout>
    )
}