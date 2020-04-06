import Axios from 'axios';

export const getVoucherTaxes = async (params) => {
    const response = await Axios.get('/Impuestos/Comprob', { params });
    return response.data;
}

export const taxesValidateRow = async (params) => {
    const response = await Axios.post('/Impuesto/Validarlinea', params);
    return response.data;
}

export const taxesConfirm = async (params) => {
    const response = await Axios.post('/Impuesto/confirmar', params);
    return response.data;
}
