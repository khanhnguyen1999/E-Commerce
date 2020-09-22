import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

export default function Private({component:Component,rest}){
    return  <Route {...rest} render={props=>isAuthenticated()?(
        <Component {...props}></Component>
    ):(
        <Redirect to={{pathname:"/signin",state={ from:props.location}}}/>
    )}/>
}