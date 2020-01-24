import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRICE_BY_PRODUCT,
    GET_PRICE_BY_PRODUCT_SUCCESS,
    CHECK_ITEM_BY_PRODUCT,
    CHECK_ITEM_BY_PRODUCT_SUCCESS,
    SET_TABLE_DATA_PRODUCTS,
    GET_PRODUCTS_CART,
    GET_PRODUCTS_CART_SUCCESS,
    SET_INPUT_FOCUS,
    SET_INPUT_FOCUS_SUCCESS,

} from '../constants/ActionsTypes';


export const getProducts = (params) => {
    return {
        type: GET_PRODUCTS,
        payload: params
    }
};

export const getProductsSuccess = (response) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: response
    }
};


export const searchProducts = (params) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: params
    }
};

export const searchProductsSuccess = (response) => {
    return {
        type: SEARCH_PRODUCTS_SUCCESS,
        payload: response
    }
};

export const getPriceByProduct = (params) => {
    return {
        type: GET_PRICE_BY_PRODUCT,
        payload: params
    }
};

export const getPriceByProductSuccess = (response) => {
    return {
        type: GET_PRICE_BY_PRODUCT_SUCCESS,
        payload: response
    }
};

export const checkItemByProduct = (params) => {
    return {
        type: CHECK_ITEM_BY_PRODUCT,
        payload: params
    }
};

export const checkItemByProductSuccess = (response) => {
    return {
        type: CHECK_ITEM_BY_PRODUCT_SUCCESS,
        payload: response
    }
};


export const setTableDataProducts = (params) => {
    return {
        type: SET_TABLE_DATA_PRODUCTS,
        payload: params
    }
};

export const getProductsCart = (params) => {
    return {
        type: GET_PRODUCTS_CART,
        payload: params
    }
};

export const getProductsCartSuccess = (response) => {
    return {
        type: GET_PRODUCTS_CART_SUCCESS,
        payload: response
    }
};


export const setInputFocus = (field) => {
    return {
        type: SET_INPUT_FOCUS,
        payload: field
    }
};

export const setInputFocusSuccess = (response) => {
    return {
        type: SET_INPUT_FOCUS_SUCCESS,
        payload: response
    }
};