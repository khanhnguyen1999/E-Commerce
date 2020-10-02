import React, { useState,useEffect} from 'react'
import Layout from './Layout'
import {getCategories} from './apiCore'
import Cart from './Cart'


export default function Search(){

    const [data,setData]=useState({
        categories:[][],
        category:'',
        search:'',
        results:[],
        searched:false
    })
    const loadCategories = ()=>{
        getCategories().then(data=>{
            if(data?.err){
                console.log(data.err)
            }else{
                setData({...data,categories:data})
            }
        })
    }
    return (
        <div>Search</div>
    )
}