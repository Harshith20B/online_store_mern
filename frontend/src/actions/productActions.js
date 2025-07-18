import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
} from '../constants/productConstants'

// ✅ NEW: Base URL from env
const API_URL = process.env.REACT_APP_API_URL

export const listProducts =  (keyword = '') => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST})
        const { data }  = await axios.get(`${API_URL}/api/products?keyword=${keyword}`)
        
        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message 
                     : error.message,
        })
    }
}

export const ListproductbyCg = (Cg) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${API_URL}/api/products/?Cg=${Cg}`)
        dispatch({type : PRODUCT_LIST_SUCCESS, payload : data})
        console.log(data)
    } catch (error) {
        dispatch({
            type : PRODUCT_LIST_FAIL, 
            payload : error.response && error.response.data.message 
                      ? error.response.data.message 
                      : error.message,
        })
    }
}

export const Listproductbyfiter = (filter) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${API_URL}/api/products/?filter=${filter}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
    } catch (error) {
        dispatch({
            type : PRODUCT_LIST_FAIL, 
            payload : error.response && error.response.data.message 
                      ? error.response.data.message 
                      : error.message,
        })
    }
}

export const Listproductbyprice = (from,to) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${API_URL}/api/products/?from=${from}&to=${to}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
    } catch (error) {
        dispatch({
            type : PRODUCT_LIST_FAIL, 
            payload : error.response && error.response.data.message 
                      ? error.response.data.message 
                      : error.message,
        })
    }
}

export const listProductDetails =  (id) => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_DETAILS_REQUEST})
        const { data }  = await axios.get(`${API_URL}/api/products/${id}`)
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message 
                     : error.message,
        })
    }
}

export const DeleteProduct = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`${API_URL}/api/products/${id}`, config) 
        dispatch({ type: PRODUCT_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        })
    }
}

export const CreateProduct = () => async(dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`${API_URL}/api/products/`, {}, config) 
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        })
    }
}

export const UpdateProduct = (product) => async(dispatch, getState) => {
    console.log(product)
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`${API_URL}/api/products/${product._id}`, product, config) 
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        })
    }
}

export const createproductReview = (productId, review) => async(dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`${API_URL}/api/products/${productId}/reviews`, review, config) 
        dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        })
    }
}
