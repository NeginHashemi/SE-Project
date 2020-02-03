import { FETCH_CART, UPDATE_CART, DELETE_CART_ITEM } from '../actions/types'
import _ from 'lodash'


const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_CART:
            return {...state, ..._.mapKeys(action.payload, "id")}
        case UPDATE_CART:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_CART_ITEM:
            return _.omit(state, action.payload)
        default:
            return state
    }
}

export default cartReducer