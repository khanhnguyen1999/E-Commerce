import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import {getCategories} from './apiCore'
import Cart from './Cart'


export default function Search(){

    const [data,setData]=useState({
        categories:[],
        category:'',
        search:'',
        results:[],
        searched:false
    })
    const {categories,category,search,results,searched}=data
    const loadCategories = ()=>{
        getCategories().then(data=>{
            if(data?.err){
                console.log(data.err)
            }else{
                setData({...data,categories:data})
            }
        })
    }
    useEffect(()=>{
        loadCategories()
    },[])
    const searchSubmit = ()=>{

    }
    const searchForm = ()=>{
        return (<form onSubmit={searchSubmit}>
            <input type="search" className="form-control" onChange={handleChange()}/>
        </form>)
    }
    return (
        <div className="row">
            <div className="container">
                {searchForm()}
            </div>
        </div>
    )
}