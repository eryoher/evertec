import Axios from 'axios';

export const getVoucherAccounting = async (params) => {
    const response = await Axios.get('/Asiento/Comprob', { params });
    return response.data;
}

export const searchAccount = async (params) => {
    const response = await Axios.get('/Asiento/BuscarCuenta', { params });
    return response.data;
}

export const getAccountDetail = async (params) => {
    const response = await Axios.post('/Asiento/DatosCuenta', params);
    return response.data;
}

export const accountValidate = async (params) => {
    const response = await Axios.post('/Asiento/ValidarLinea', params);
    return response.data;
}