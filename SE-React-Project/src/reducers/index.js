import { combineReducers } from "redux"

import {reducer as formReducer} from "redux-form"
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'

export default combineReducers({
    form: formReducer,
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
})