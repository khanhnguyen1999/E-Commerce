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
               <div className="btn input-group-append" style={{border:'none'}}></div>
           </span>
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