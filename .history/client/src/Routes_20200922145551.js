import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from './user/Signup'
import Signin from './user/Signin'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}