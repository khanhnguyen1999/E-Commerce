import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {isAuthenticated} from '../auth'


const isActive = (history,path)=>{
    if(history.location.pathname===path){
        return {
            color:'#ff9900'
        }
    }
    else{
        return {
            color:'#fff'
        }
    }
}

function Menu({history}){
    const Logout = ()=>{
        localStorage.removeItem('jwt')
    }
    return(
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={isActive(history,'/')}>Home</Link>
                </li>
                
                {!isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin" style={isActive(history,'/signin')}>SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" style={isActive(history,'/signup')}>SignUp</Link>
                        </li>
                    </>
                )}
               {
                   isAuthenticated() && (
                       <>
                       <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" style={isActive(history,'/dashboard')}>DashBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" onClick={Logout} style={isActive(history,'/logout')}>Logout</Link>
                        </li>
                        </>
                   )
               }
            </ul>
        </div>
    )
}

export default withRouter(Menu)