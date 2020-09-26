import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'

export default function Shop(){
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
        <h2 className="mb-4">Best Sellers</h2>
        <div className="row">
             {
                productsBySell.map((product,i)=>{
                    return(
                        <Cart key={i} product={product}/>
                    )
                })
            }
        </div>
       
        <h2 className="mb-4">New Arrivals</h2>
        <div className="row">
              {
                    productsByArrival.map((product,i)=>{
                        return(
                            <Cart key={i} product={product}/>
                        )
                    })
                }
        </div>
    </Layout>
    )
}