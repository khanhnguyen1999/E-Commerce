import React from 'react'
import Layout from '../Page/Layout'

export default function Signup(){
    const signUpForm = ()=>(
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input type="text" className="form-control"/>
            </div>
        </form>
    )
    return(
        <Layout title="Signup Page" description="Signup to Nodejs React E commerce App">
            ...
        </Layout>
    )
}