import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,    
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDER,
    GET_ORDER_SUCCESS,
    GET_PAYMENT_BY_CODE,
    GET_PAYMENT_BY_CODE_SUCCESS,
    CLEAR_ORDER
  } from '../constants/ActionsTypes';
  
  export const createOrder = (params) => {
    return {
      type: CREATE_ORDER,
      payload: params
    };
  };
  
  export const createOrderSuccess = (response) => {
    return {
      type: CREATE_ORDER_SUCCESS,
      payload: response
    }
  };

  export const getOrders = (params) => {
    return {
      type: GET_ORDERS,
      payload: params
    };
  };
  
  export const getOrdersSuccess = (response) => {
    return {
      type: GET_ORDERS_SUCCESS,
      payload: response
    }
  }; 

  export const getOrder = (params) => {
    return {
      type: GET_ORDER,
      payload: params
    };
  };
  
  export const getOrderSuccess = (response) => {
    return {
      type: GET_ORDER_SUCCESS,
      payload: response
    }
  }; 

  export const getPaymentByCode = (params) => {
    return {
      type: GET_PAYMENT_BY_CODE,
      payload: params
    };
  };
  
  export const getPaymentByCodeSuccess = (response) => {
    return {
      type: GET_PAYMENT_BY_CODE_SUCCESS,
      payload: response
    }
  };

  export const clearOrder = () => {
    return {
      type: CLEAR_ORDER    
    }
  };
  
