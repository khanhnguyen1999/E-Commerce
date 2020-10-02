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
    const [size,setSize]=useState(0)
    const [filteredResults,setFilteredResults]=useState([])
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
                setFilteredResults(data?.data)
                setSize(data.size)
                setSkip(0)
            }
        })
    }
    const loadMore = ()=>{
        let toSkip = skip+limit
        getFilteredProducts(toSkip,limit,myFilters.filters).then(data=>{
            if(data?.err){
                setError(data.err)
            }else{
                setFilteredResults([...filteredResults,...data?.data])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = ()=>{
        return (
            size > 0 && size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">Load More</button>
            )
        )
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
        return array
    }

    useEffect(()=>{
        showProduct()
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
                    <h2 className="mb-4">Products</h2>
                    <div className="row">
                        {
                            filteredResults.map((product,i)=>{
                                return (
                                        <Cart product={product}/>
                                )
                            })
                        }
                    </div>
                    {loadMoreButton()}
                </div>
            </div>
         </Layout>
    )
}