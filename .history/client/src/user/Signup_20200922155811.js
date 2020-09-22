import React,{useState} from 'react'
import Layout from '../Page/Layout'

export default function Signup(){
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })
    const handleChange = name => e =>{

    }
    
    const signUpForm = ()=>(
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input type="password" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
    return(
        <>
            <Layout title="Signup Page" description="Signup to Nodejs React E commerce App" className="container col-md-8 offset-md-2">
                {signUpForm()}
            </Layout>
        </>
    )
}