import React from 'react'
import {Link} from 'react-router-dom'
import ShowImage from './ShowImage'

export default function Cart({product}){
    return(
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <ShowImage item={product} url="product"/>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Link to={`singleProduct/${product._id}`}>
                        <button className="btn btn-outline-primary mt-2 mb-2">
                            View Product
                        </button>
                    </Link>
                    <button className="btn btn-outline-warning mt-2 mb-2">
                            Add Product to Cart
                    </button>
                </div>
            </div>
    )
}