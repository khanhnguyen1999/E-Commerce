import React,{useState,useEffect} from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'
import {Link} from 'react-router-dom'
import  {createProduct} from './apiAdmin'

export default function addProduct(){
    return (
        <Layout title="Add a new Category" description={`G'day !`} className="container">
            <div className="row">
                <div className="col-md-8">
                    {showSuccess()}
                    {showError()}
                   {formCreate()}
                   <Link to="/admin/dashboard" className="text-warning">Back to the Dashboard</Link>
                </div>
            </div>
        </Layout>
    )
}