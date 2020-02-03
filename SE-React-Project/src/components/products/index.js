import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions'

import './index.scss'

import Product from '../basic/product'

class Products extends React.Component{
    componentDidMount(){
        this.props.fetchProducts()
    }
    render(){
        return(
            <div className="products__container row m-3 p-3">
                {this.props.products ? Object.values(this.props.products).map((element, index) => {
                    return(
                        <Product key={index} name={element.name} price={element.price} seller={element.seller} productId={element.id}/>
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