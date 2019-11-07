import Axios from 'axios';

export const getConfigVoucher = async (params) => {
    const response = await Axios.get('/ProcesoDeComprobante', { params });
    return response.data;
}

export const getVoucherHead = async (params) => {
    const response = await Axios.get('/vta_cab_compr', { params });
    return response.data;
}

export const voucherHeadAuto = async (params) => {
    const response = await Axios.get('/vta_cab_compr/atrib_autocompl', params);
    return response.data;
}

export const voucherHeadValidatekey = async (params) => {
    const response = await Axios.get('/vta_cab_compr/clave_valid', { params: params });
    return response.data;
}

export const voucherHeadCheckDate = async (params) => {
    const response = await Axios.get('/vta_cab_compr/fecha_valid', { params });
    return response.data;
}