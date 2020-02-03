import React from "react"
import { Router, Route } from "react-router-dom"
import { connect } from "react-redux"

import "../../scss/normalize.css"
import "./index.scss"

import history from '../../history'
import SignIn from '../signIn'
import SignUp from '../signUp'
import MainPage from '../mainPage'
import Cart from '../cart'
import Products from '../products'
import AddProduct from '../addProduct'
import Navbar from '../navbar'

const App = () => {
    return(<div className="App__container container-fuild">
        <Router history={history}>
            <Navbar/>
            <Route path="/" exact component={MainPage} />
            <Route path="/auth/SignIn" exact component={SignIn} />
            <Route path="/auth/SignUp" exact component={SignUp} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/productList" exact component={Products} />
            <Route path="/addProduct" exact component={AddProduct} />
        </Router>
    </div>)
}

export default App