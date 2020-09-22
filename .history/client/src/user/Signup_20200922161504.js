import React,{useState} from 'react'
import Layout from '../Page/Layout'
import API from '../config'

export default function Signup(){
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })
    const signup = user =>{
        fetch(`${API}/signup`,{
            method:"POST",
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
            .then(res=>{
                return res.json()
            })
            .catch(err=>{
                console.log(err)
            })
    }
    const handleChange = name => e =>{
        setValues({
            ...values,
            error:false,
            [name]:e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        signup({name,email,password})
        .then(data=>{
            if(data.error){
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
        <div className="alert alert-danger" style={{display:error?'':none}}>
            {error}
        </div>
    )

    const showSuccess = ()=>(
        <div className="alert alert-danger" style={{display:success?'':none}}>
            New account is created. Please signin
        </div>
    )
    
    const signUpForm = ()=>(
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input onChange={handleChange("name")} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input onChange={handleChange("email")} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input onChange={handleChange("password")} type="password" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
    return(
        <>
            <Layout title="Signup Page" description="Signup to Nodejs React E commerce App" className="container col-md-8 offset-md-2">
                {showSuccess()}
                {showError()}
                {signUpForm()}
                {JSON.stringify(values)}
            </Layout>
        </>
    )
}