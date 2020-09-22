import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './Page/Home'
import userDashboard from './user/userDashBoard'



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>    
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/dashboard" exact component={userDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}