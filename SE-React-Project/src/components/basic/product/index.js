import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions'
import shared_image from './images/1.jpg'
import './index.scss'

const Product = (props) => {
    return(
        <div className="product__container col-md-2 p-2">
            <div className="card">
                <img className="card-img-top" src={shared_image} alt="Card image cap"></img>
                <div className="card-body text-center">
                    <h6 className="card-title">{props.name}</h6>
                    <p className="card-text">
                        <p>{props.price} تومان</p>
                        <p><small className="text-secondary">خرید از:</small> {props.seller}</p>
                    </p>
                    <a href="#" className="btn btn-primary product-item__add-product rounded btn btn-success mb-3 col-12" onClick={() => props.addToCart(props.productId, 1)}>اضافه کردن به سبد</a>
                    <a href="#" className="btn btn-primary product-item__add-product rounded btn btn-success col-12">مشاهده‌ی محصول</a>
                </div>
            </div>


            {/* <div className="product__image"></div>
            <div className="product__details">
                <div className="product__name">{props.name}</div>
                <div className="product__price">{props.price} تومان</div>
                <div className="product__seller">خرید از: {props.seller}</div>
            </div>
            <div className="product__buttons">
                <button onClick={() => { props.addToCart(props.productId, 1) }}>اضافه کردن به سبد</button>
                <button>مشاهده محصول</button>
            </div> */}
        </div>
    )
}

export default connect(null, { addToCart })(Product)