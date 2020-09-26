import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'
import {getCategories} from './apiCore'
import Checkbox from './Checkbox'
import {price} from './fixedPrices'
import radioBox from './radioBox'

export default function Shop(){
    const [myFilters,setMyFilters]=useState({
        filters:{
            category:[],
            price:[]
        }
    })
    const [categories,setCategories]= useState([])
    const [error,setError]=useState(false)
    const showProduct = ()=>{
        getCategories()
        .then(data=>{
            if(data?.err){
                setError(data.err)
            }else{
                setCategories(data)
            }
        })
    }
    const handleFilters = (filters,filterBy)=>{
        const newFilters = {...myFilters}
        newFilters.filters[filterBy]=filters
        setMyFilters(newFilters)
    }
    useEffect(()=>{
        showProduct()
    },[])
    return (
        <Layout title="Home Page" description="Nodejs React E commerce App" className="container">
            <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox categories={categories}
                        handleFilters={filters => handleFilters(filters,'category')}
                        />
                    </ul>
                    <ul>
                        <radioBox prices={prices}
                        handleFilters={filters => handleFilters(filters,'price')}
                        />
                    </ul>
                </div>
                <div className="col-8">
                    {/* {showProduct()} */}
                    test
                </div>
            </div>
         </Layout>
    )
}