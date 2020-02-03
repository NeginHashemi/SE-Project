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
    }
]

class SignIn extends React.Component{
    onSubmit = () => {
        alert("clicked")
    }
    render(){
        return(
            <div className="sign-in__container m-3 mt-5 p-3 col-md-4 ml-auto mr-auto card rounded">
                <div className="sign-in__image"></div>
                <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"ورود"} title={"ورود"}/>
                <CustomButton text="ثبت‌نام" onClick={() => {history.push('/auth/SignUp')}} />
            </div>
        )
    }
}

export default connect(null, {})(SignIn);