import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions'

import './index.scss'

import Product from '../basic/product'

class Products extends React.Component{
    state = {
        products: null,
    }
    componentDidMount(){
        fetch('http://localhost:8000/market/')
        .then(res => res.json()).then(json => {
            this.setState({products: json});
        });
    }
    render(){
        return(
            <div className="products__container row m-3 p-3">
                {this.state.products ? Object.values(this.state.products).map((element, index) => {
                    return(
                        <Product key={index} name={element.name} price={element.price} seller={element.seller.user.username} productId={element.id}/>
                    )
                }) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({ products : state.products })
}

export default connect(mapStateToProps, { fetchProducts })(Products);