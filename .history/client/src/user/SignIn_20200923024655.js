import React,{useState} from 'react'
import Layout from '../Page/Layout'
import {Link, Redirect} from 'react-router-dom'
import {signin,authenticate,isAuthenticated} from '../auth'


export default function Signin(){
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        redirectToReferrer:false
    })
    const {email,password,loading,error,redirectToReferrer}=values
    const {user}=isAuthenticated()
   
    const handleChange = name => e =>{
        setValues({
            ...values,
            error:false,
            [name]:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            console.log("check ",data)
            if(data.err){
                 setValues({
                     ...values,error:data.err,loading:false,redirectToReferrer:false
                 })
            }
            else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        redirectToReferrer:true
                    })
                })
            }
        })
    }
    const showError = ()=>(
        <div className="alert alert-danger" style={{display:error?'':"none"}}>
            {error}
        </div>
    )

    const showLoading = ()=>(
        loading && (<div className="alert alert-info"><h2>Loading...</h2></div>)
    )
    const redirectUser = ()=>{
        if(redirectToReferrer){
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard"/>
            }else{
                return <Redirect to="/dashboard"/>
            }
        }
    }
    
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
                {showLoading()}
                {showError()}
                {signInForm()}
                {redirectUser()}
        </Layout>
    )
}