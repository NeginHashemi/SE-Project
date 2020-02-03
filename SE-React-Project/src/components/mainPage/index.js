import React from 'react'
import { connect } from "react-redux"
import { fetchProducts } from '../../actions'
import first_img from './images/6.jpg'
import second_img from './images/4.jpg'
import third_img from './images/1.jpg'
import './index.scss'

import ProductList from '../basic/productList'

class MainPage extends React.Component{
    componentDidMount(){
        this.props.fetchProducts()
    }
    render(){
        return(<div className="main-page__container">
            {/* <div className="main-page__cover-image">Cover image goes here</div> */}

            <div id="main-page-carousel" className="carousel slide main-page__cover-image d-none d-md-block" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-img" src={first_img} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src={second_img} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src={third_img} alt="Third slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#main-page-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#main-page-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <ProductList content={this.props.products ? this.props.products : null} label="توزیع‌کنندگان برتر"/>
            <ProductList content={this.props.products ? this.props.products : null} label="محصولات برتر"/>
            <ProductList content={this.props.products ? this.props.products : null} label="محصولات تازه"/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({products: state.products})
}

export default connect(mapStateToProps, { fetchProducts })(MainPage)