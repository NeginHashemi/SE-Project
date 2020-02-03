import React from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../../actions'

import './index.scss'

import CartItem from '../basic/cartItem'

class Cart extends React.Component{
    state = {price : 0}
    addToPrice = (add) => {
        this.setState({ price: this.state.price + add })
    }
    componentDidMount(){
        this.props.fetchCart()
    }
    render(){
        return(<div className="cart__container m-3 p-3">
            <div className="cart__item-container">
            {this.props.cart ? Object.values(this.props.cart).map((element, index) => {
                return(<CartItem addToPrice={this.addToPrice} className="cart__item" cartId={element.id} productId={element.productId} amount={element.amount} key={index}></CartItem>)
            }) : null}
            </div>
            <div className="cart__footer w-75 ml-auto mr-auto row">
                <div className="cart__courier col-md-6 ml-auto border bg-light text-center">
                    <div className="row p-2">
                        <span className="col-md-5 mr-auto">هزینه‌ی ارسال</span>
                        <span className="col-md-5 ml-auto"> رایگان </span>
                    </div>
                    <div className="row p-2">
                        <span className="col-md-5 mr-auto">جمع کل</span>
                        <span className="col-md-5 ml-auto">{this.state.price} تومان</span>
                    </div>
                </div>
                <button className="btn btn-success col-md-3 mr-auto mb-auto mt-2" onClick={() => alert('سفارش شما ثبت شد.')}>ثبت سفارش</button>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({ cart: state.cart })
}

export default connect(mapStateToProps, { fetchCart })(Cart)