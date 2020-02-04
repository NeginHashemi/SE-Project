import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import './index.scss'

import Form from '../form'
import CustomButton from '../basic/customButton'

import history from '../../history'
import { auth } from '../../actions'


class SignIn extends React.Component{
    state = {
        username: "",
        password: "",
    }
    onSubmit = e => {
        console.log(this.props)
        this.props.login(this.state.username, this.state.password);
    }
    changeUsername = e => this.setState({username: e.target.value})
    changePassword = e => this.setState({password: e.target.value})
    render(){
        if (this.props.isAuthenticated) {
          return <Redirect to="/" />
        }
        const FORM_VALUES = [
            {
                title: "username",
                placeholder: "نام کاربری",
                onChange: this.changeUsername,
            },
            {
                title: "password",
                placeholder: "پسورد",
                type: "password",
                onChange: this.changePassword,
            }
        ]
        return(
            <div className="sign-in__container m-3 mt-5 p-3 col-md-4 ml-auto mr-auto card rounded">
                <div className="sign-in__image"></div>
                <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"ورود"} title={"ورود"}/>
                <CustomButton text="ثبت‌نام" onClick={() => {history.push('/auth/SignUp')}} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
      errors = Object.keys(state.auth.errors).map(field => {
        return {field, message: state.auth.errors[field]};
      });
    }
    return {
      errors,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (username, password) => {
        return dispatch(auth.login(username, password));
      }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn);