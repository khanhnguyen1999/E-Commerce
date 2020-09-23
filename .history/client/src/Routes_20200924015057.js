import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './Page/Home'
import userDashboard from './user/userDashboard'
import adminDashboard from './user/adminDashboard'
import Private from './auth/privateRoute'
import AdminRoute from './auth/adminRoute'
import AddCategory from './admin/addCategory'
import AddProduct from './admin/addProduct'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>    
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Private path="/user/dashboard" exact component={userDashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={adminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}