import React from 'react'
import Layout from '../Page/Layout'

export default function Signup(){
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
        </form>
    )
    return(
        <>
            <Layout title="Signup Page" description="Signup to Nodejs React E commerce App">
                ...
            </Layout>
            <div className="container">{signUpForm()}</div>
        </>
    )
}