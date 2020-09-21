import React from 'react'
import { Router, Switch ,Route,browserHistory } from 'react-router-dom'

import Signup from './user/Signup'
import Signin from './user/Signin'

export default function Routes(){
    return(
        <Router history={browserHistory}>
            <Switch>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </Router>
    )
}