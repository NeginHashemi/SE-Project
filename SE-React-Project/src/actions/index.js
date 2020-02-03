import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART, FETCH_CART, UPDATE_CART, DELETE_CART_ITEM, ADD_PRODUCT } from "./types"

import server from '../apis/server'

export const fetchProducts = () => async dispatch => {
    const response = await server.get('/products/')
    dispatch({ type: FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async dispatch => {
    const response = await server.get(`/products/${id}`)
    dispatch({ type : FETCH_PRODUCT, payload: response.data })
}

export const addToCart = (productId, amount) => async dispatch => {
    const response = await server.post('/cart/', {productId, amount})
    console.log(response)
    dispatch({ type: ADD_TO_CART, payload: response.data })
}

export const fetchCart = () => async dispatch => {
    const response = await server.get('/cart/')
    dispatch({ type: FETCH_CART, payload: response.data })
}

export const changeQuantity = (cartData) => async dispatch => {
    if(cartData.amount == 0){
        await server.delete(`/cart/${cartData.id}`)
        dispatch({ type: DELETE_CART_ITEM, payload: cartData.id })
    }else{
        const response = await server.patch(`/cart/${cartData.id}`, cartData)
        dispatch({ type: UPDATE_CART, payload: response.data })
    }
}

export const addProduct = (product) => async dispatch => {
    try{
        console.log(product)
        const response = await server.post('/products/', product)
        console.log(response.data)
        dispatch({ type: ADD_PRODUCT, payload: response.data })
        alert('محصول با موفقیت اضافه شد')
    }catch{
        alert('خطایی رخ داد')
    }
}