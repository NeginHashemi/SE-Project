import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import Form from '../form'
import CustomButton from '../basic/customButton'

import history from '../../history'

const FORM_VALUES = [
    {
        title: "username",
        placeholder: "نام کاربری"
    },
    {
        title: "password",
        placeholder: "پسورد",
        type: "password"
    },
    {
        title: "repeatPassword",
        placeholder: "تکرار پسورد",
        type: "password"
    },
    {
        title: "userType",
        inputType: "radioButton",
        label: "ثبت‌نام به عنوان:",
        content: [
            {
                title: "buyer",
                label: "خریدار"
            },{
                title: "seller",
                label: "فروشنده"
            }
        ]
    }
]

class SignUp extends React.Component{
    onSubmit = () => {
        alert("clicked")
    }
    render(){
        return(
        <div className="sign-up__container m-3 mt-5 p-3 col-md-4 ml-auto mr-auto card">
            <div className="sign-up__image"></div>
            <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"ثبت‌نام"} title={"ثبت‌نام"}/>
            <CustomButton text="وارد شوید" onClick={() => {history.push('/auth/SignIn')}} />
        </div>)
    }
}

export default connect(null, {})(SignUp)