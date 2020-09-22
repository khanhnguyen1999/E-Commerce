import React from 'react'
import Layout from '../Page/Layout'
import {isAuthenticated} from '../auth'

export default function userDashboard(){
    return (
        <Layout title="DashBoard" description="User DashBoard" className="container">
            <div className="card mb-5">
                <h3 className="card-header">User information</h3>
                <ul>
                    <li className="list-group-item">name</li>
                    <li className="list-group-item">email</li>
                    <li className="list-group-item">role</li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-header">Purchase history</h3>
                    <ul>
                        <li className="list-group-item">history</li>
                    </ul>
            </div>
        </Layout>
    )
}