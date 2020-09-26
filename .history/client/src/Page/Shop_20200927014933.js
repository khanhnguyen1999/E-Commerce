import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'

export default function Shop(){
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8"></div>
            </div>
         </Layout>
    )
}