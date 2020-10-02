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

    return (
        <div>Search</div>
    )
}