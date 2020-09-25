import React from 'react'
import {API} from '../config'

export default function ShowImage({item,url}){
    return(
        <div className="product-img">
            <img src={`${API}/${url}/photo/${item._id}`} className="mb-3"/>
        </div>
    )
}