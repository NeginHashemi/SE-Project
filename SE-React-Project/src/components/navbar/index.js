import React from 'react'
import { NavLink } from 'react-router-dom'
import lemonslice from './images/lemon-slice.svg'
import './index.scss'

import history from '../../history'

const NAVBAR_ITEMS = [
    {
        text: "صفحه‌ی اصلی",
        link: "/",
        class: "ml-md-5",
    },{
        text: "سبد خرید",
        link: "/cart",
        class: "ml-md-5",
    },{
        text: "صفحه‌ی محصولات",
        link: "/productList",
        class: "ml-md-5",
    },{
        text: "اضافه‌کردن محصول",
        link: "/addProduct",
        class: "ml-md-5",
    },{
        text: "ورود",
        link: "/auth/SignIn",
        class: "ml-md-2 mr-md-auto ml-sm-5 mr-sm-5 mb-2 btn btn-success",
    },{
        text: "ثبت‌نام",
        link: "/auth/SignUp",
        class: "ml-md-3 mr-md-2 ml-sm-5 mr-sm-5 mb-2 btn btn-success",
    }
]

// class Navbar extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             underline_pos: 0,
//         }
//     }
//     render(){
//         return(<div className="navbar__container text-light bg-light-green">
//             {NAVBAR_ITEMS.map((element, index) => {
//                 return(<div key={index} className={`navbar__item mt-3 ${element.class} ${this.state.underline_pos == index && index < 4?"underline_item":""}`} onClick={() => {history.push(element.link);this.setState({underline_pos: index});}}>{element.text}</div>)
//             })}
//         </div>)
//     }
// }

class Navbar extends React.Component {
    state = {
      navCollapsed: true,
    }
  
    _onToggleNav = () => {
      this.setState({ navCollapsed: !this.state.navCollapsed })
    }
  
    render () {
      const {navCollapsed} = this.state
      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light-green p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <a class="navbar-brand text-center d-block" href="/">
                    <img src={lemonslice} width="50" height="auto" class="d-inline-block align-top ml-2" alt=""></img>
                    لیمومارکت
                </a>

                <ul className="navbar-nav w-75 mt-2 mt-lg-0 ml-auto mr-auto">
                    {NAVBAR_ITEMS.map((element, index) => {
                        return (
                            <NavLink
                                exact
                                key={index}
                                activeClassName={`${index < 4?"underline_item":""}`}
                                className={`navbar__item nav-item nav-link text-center mt-3 ${element.class}`}
                                onClick={(e) => history.push(element.link)}
                                to={element.link}
                                tag="div">
                                {element.text}
                            </NavLink>
                        )
                    })}
                </ul>
                </div>
            </nav>
        )
    }
  }

export default Navbar