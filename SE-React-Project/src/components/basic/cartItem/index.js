import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct, changeQuantity } from '../../../actions'
import './index.scss'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

class cartItem extends React.Component {
    componentDidMount(){
        this.props.fetchProduct(this.props.productId).then(() => this.props.addToPrice(this.props.product.price * this.props.amount))
    }
    changeQuantity(mode){
        this.props.changeQuantity({id: this.props.cartId, amount: this.props.amount + mode, productId: this.props.productId})
        this.props.addToPrice(mode * this.props.product.price)
    }
    render(){
        return(<div className="cart-item__container ml-auto mr-auto w-75">
            {this.props.product ? 
            <div class="card mb-3 w-100">
                <div class="card-body row text-center">
                    <div className="cart-item__name col-md-2">{this.props.product.name}</div>
                    <div className="cart-item__seller col-md-2"> <small className="text-secondary">خرید از: </small> {this.props.product.seller}</div>
                    <div className="cart-item__price col-md-2 mr-auto">{this.props.amount * this.props.product.price} تومان</div>
                    <div className="col-md-2 d-flex justify-content-around">
                        <div className="cart-item__add-amount cart-item__change-quantity" onClick={() => this.changeQuantity(1)}>
                            <button className="btn btn-sm btn-success rounded-circle"><FaPlus /></button>
                        </div>
                        <div className="cart-item__amount col-md-2">{this.props.amount}</div>
                        <div className="cart-item__sub-amount cart-item__change-quantity" onClick={() => this.changeQuantity(-1)}>
                            <button className="btn btn-sm btn-success rounded-circle"><FaMinus /></button>
                        </div>
                    </div>
                </div>
            </div>
            : null}
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return({ product: state.products[ownProps.productId] })
}

export default connect(mapStateToProps, { fetchProduct, changeQuantity })(cartItem)