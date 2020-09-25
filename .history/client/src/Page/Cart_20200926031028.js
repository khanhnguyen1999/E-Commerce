import React from 'react'
import {Link} from 'react-router-dom'

export default function Cart({product}){
    return(
        <div className="col-4 mb-3">
            <div className="cart">
                <div className="cart-header">{product.name}</div>
                <div className="cart-body">
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Link to="/">
                        <button className="btn btn-outline-primary mt-2 mb-2">
                            View Product
                        </button>
                    </Link>
                    <button className="btn btn-outline-warning mt-2 mb-2">
                            Add Product to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}