import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'
import {getCategories} from './apiCore'

export default function Shop(){
    const showProduct = ()=>{
        getCategories()
    }
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
            <div className="row">
                <div className="col-4">
                    <h2>khánh</h2>
                </div>
                <div className="col-8">
                    {/* {getCategories()} */}
                    <h2>kasd</h2>
                </div>
            </div>
         </Layout>
    )
}