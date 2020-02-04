import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider, connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

import { auth } from './actions'
import reducers from "./reducers"
import App from "./components/App"

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
)


class AppPrivate extends React.Component {

    componentDidMount() {
        this.props.loadUser();
    }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
          if (this.props.auth.isLoading) {
            return <em>در حال بارگذاری</em>;
          } else if (!this.props.auth.isAuthenticated) {
            return <Redirect to="/auth/SignIn" />;
          } else {
            return <ChildComponent {...props} />
          }
        }} />
    }
    
    render() {
        let {PrivateRoute} = this;
        return(<div className="App__container container-fuild">
            <App />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
return {
    loadUser: () => {
    return dispatch(auth.loadUser());
    }
}
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(AppPrivate);
ReactDOM.render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.querySelector("#root")
)
