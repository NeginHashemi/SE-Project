import React from 'react'

import './index.scss'

import ProductItem from '../productItem'

const ProductList = (props) => {
    return(<div className="product-list__container m-3 p-3">
        <div className="product-list__label h4 text-right">{props.label}</div>
        
        <div className="product-list__items row">
            {props.content ? Object.values(props.content).map((element, index) => {
                return(<ProductItem key={index} name={element.name} price={element.price} seller={element.seller} productId={element.id} image={element.image}/>)
            }) : null}
        </div>
    </div>)
}

export default ProductList