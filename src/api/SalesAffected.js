import Axios from 'axios';

export const salesAffectedValidate = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad/Validar', { params: params });
    return response.data;
}

export const salesAffectedImportValidate = async (params) => {
    const response = await Axios.get('/AfectaVentas/importe/Validar');
    return response.data;
}

export const salesAffectedCant = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad', { params: params });
    return response.data;
}

export const salesAffectedImport = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad', { params: params });
    return response.data;
}

export const salesAffectedSubCalculation = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad/CalculoSubtotales', params);
    return response.data;
}

export const salesAffectedConfirm = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad/confirmar', params);
    return response.data;
}