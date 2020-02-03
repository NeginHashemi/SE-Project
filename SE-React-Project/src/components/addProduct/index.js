import React from 'react'
import { addProduct } from '../../actions'
import { connect } from 'react-redux'

import './index.scss'

import Form from '../form'

const FORM_VALUES = [
    {
        title: "name",
        label: "نام محصول"
    },
    {
        title: "price",
        label: "قیمت",
    },
    {
        title: "productionTime",
        label: "تاریخ تولید"
    },
    {
        title: "description",
        label: "توضیحات",
        inputType: "textarea"
    }
]

class AddProduct extends React.Component{
    onSubmit = (formValues) => {
        this.props.addProduct({...formValues, seller: this.props.seller})
    }
    render(){
        return(
            <div className="add-product__container m-3 mt-5 p-3 col-md-4 ml-auto mr-auto">
                <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"اضافه‌کردن محصول"}/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return({ seller: state.user.currentUser })
}

export default connect(mapStateToProps, { addProduct })(AddProduct)