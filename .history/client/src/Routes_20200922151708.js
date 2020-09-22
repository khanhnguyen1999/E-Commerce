import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './Page/Home'
import Menu from './Page/Menu'

export default function Routes(){
    return(
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path="/" exact component={Home}/>    
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}