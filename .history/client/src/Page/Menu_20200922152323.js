import React from 'react'
import {Link,withRouter} from 'react-router-dom'


const isActive = (history,path)=>{
    if(history.location.pathname===path){
        return {
            color:'#ff9900'
        }
    }
    return {
        color:'#fff'
    }
}

function Menu(props){
    return(
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item" style={isActive(props.history,'/')}>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item" style={isActive(props.history,'/signin')}>
                    <Link className="nav-link" to="/signin">SignIn</Link>
                </li>
                <li className="nav-item" style={isActive(propshistory,'/signup')}>
                    <Link className="nav-link" to="/signup">SignUp</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)