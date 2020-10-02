import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import {getCategories,list} from './apiCore'
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
    const searchData = ()=>{
        console.log(search,category)
    }
    const searchSubmit = (e)=>{
        //
        e.preventDefault()
        searchData()
    }
    const handleChange = (name)=>e=>{
        //
        setData({...data,[name]:e.target.value,searched:false})
    }
    const searchForm = ()=>{
        return (<form onSubmit={searchSubmit}>
           <span className="input-group-text">
               <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select className="btn mr-2" onChange={handleChange("category")}>
                            <option value="All">Pick Category</option>
                            {
                                categories.map((c,i)=>{
                                    return(
                                        <option key={i} value={c._id}>{c.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input type="search" className="form-control" onChange={handleChange('search')} placeholder="Search..."/>
               </div>
               <div className="btn input-group-append" style={{border:'none'}}>
                   <button className="input-group-text">Search</button>
               </div>
           </span>
        </form>)
    }
    return (
        <div className="row">
            <div className="container mb-3 ">
                {searchForm()}
            </div>
        </div>
    )
}