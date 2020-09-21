import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Routes path="/signin" exact component={Signin}/>
                <Routes path="/signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}