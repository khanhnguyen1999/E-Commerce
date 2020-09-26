import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import Cart from './Cart'
import {getCategories,getFilteredProducts} from './apiCore'
import Checkbox from './Checkbox'
import {prices} from './fixedPrices'
import RadioBox from './radioBox'

export default function Shop(){
    const [myFilters,setMyFilters]=useState({
        filters:{
            category:[],
            price:[]
        }
    })
    const [categories,setCategories]= useState([])
    const [error,setError]=useState(false)
    const [limit,setLimit]=useState(6)
    const [skip,setSkip]=useState(0)
    const [filteredResults,setFilteredResults]=useState(0)
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
    const loadFilteredResults = (newFilters)=>{
        getFilteredProducts(skip,limit,newFilters).then(data=>{
            if(data?.err){
                setError(data.err)
            }else{
                setFilteredResults(data)
            }
        })
    }
    const handleFilters = (filters,filterBy)=>{
        const newFilters = {...myFilters}
        newFilters.filters[filterBy]=filters
        if(filterBy=="price"){
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy]=priceValues 
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters)
    }
    const handlePrice = (value)=>{
        const data = prices
        let array =[]
        for(let key in data){
            if(data[key]._id===parseInt(value)){
                array = data[key].array
            }
        }
    }

    useEffect(()=>{
        showProduct(),
        loadFilteredResults(skip,limit,myFilters.filters)
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
                    <h4>Filter by price range</h4>
                    <ul>
                        <RadioBox prices={prices}
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