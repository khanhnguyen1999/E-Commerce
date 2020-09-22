import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

export default function Private({component:Component})