import Axios from 'axios';
import { BASE_URL } from 'constants/ActionsTypes'

export const createOrder = async (params) => {
    const response = await Axios.post(`${BASE_URL}/orders/createOrder`, params);
    return response.data;  
}

export const getOrder = async (orderId) => {    
    const response = await Axios.get(`${BASE_URL}/orders/${orderId}?filter={"include": [{"relation": "products"}]}`);    
    return response.data;  
}

export const getOrders = async (params) => {    
    const response = await Axios.get(`${BASE_URL}/orders?filter={"include": [{"relation": "products"}]}`, {params});    
    return response.data;  
}

export const getPaymentByCode = async (params) => {    
    const response = await Axios.post(`${BASE_URL}/orders/getPayment`, {code:params});    
    return response.data;  
}

