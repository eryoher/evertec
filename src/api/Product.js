import Axios from 'axios';

export const getProducts = async (params) => {
    const response = await Axios.get('/Productos/consulta', { params: params });
    return response.data;
}

export const searchProducts = async (params) => {
    const response = await Axios.get('/Productos/Seleccion', { params });
    return response.data;
}


export const getPriceByProduct = async (params) => {
    const response = await Axios.get('/Productos/Precio', { params });
    return response.data;
}

export const checkItemByProduct = async (params) => {
    const response = await Axios.post('/Productos/checkItem', { params: params });
    return response.data;
}

export const getProductsCart = async (params) => {
    //console.log(params)
    const response = await Axios.get('/Productos/carro', { params });
    return response.data;
}