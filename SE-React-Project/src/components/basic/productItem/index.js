import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions'
import shared_image from './images/1.jpg'
import { FaPlus } from 'react-icons/fa'

import './index.scss'

const ProductItem = (props) => {
    return (<div className="product-item__container col-md-2 p-2">

        <div className="card">
            <img className="card-img-top" src={shared_image} alt="Card image cap"></img>
            <div className="card-body text-center">
                <h6 className="card-title">{props.name}</h6>
                <p className="card-text">
                    <p>{props.price} تومان</p>
                    <p><small className="text-secondary">خرید از:</small> {props.seller}</p>
                </p>
                <a href="#" className="btn btn-primary product-item__add-product rounded-circle btn btn-success" onClick={() => props.addToCart(props.productId, 1)}><FaPlus /></a>
            </div>
        </div>

        {/* // <div className="product-item__image"></div>
        // <div className="product-item__name">{props.name}</div>
        // <div className="product-item__price">{props.price}</div>
        // <div className="product-item__seller">{props.seller}</div>
        // <div className="product-item__add-product" onClick={() => props.addToCart(props.productId, 1)}>+</div> */}
    </div>)
}

export default connect(null, { addToCart })(ProductItem)