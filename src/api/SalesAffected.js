import Axios from 'axios';

export const salesAffectedValidate = async (params) => {
    const response = await Axios.post('/AfectaVentas/cantidad/Validar', params);
    return response.data;
}

export const salesAffectedImportValidate = async (params) => {
    const response = await Axios.post('/AfectaVentas/importe/Validar', params);
    return response.data;
}

export const salesAffectedCant = async (params) => {
    const response = await Axios.get('/AfectaVentas/Cantidad', { params });
    return response.data;
}

export const salesAffectedImport = async (params) => {
    const response = await Axios.get('/AfectaVentas/importe', { params });
    return response.data;
}

export const salesAffectedSubCalculation = async (params) => {
    const response = await Axios.get('/AfectaVentas/Cantidad/CalculoSubtotales', { params });
    return response.data;
}

export const salesAffectedConfirm = async (params) => {
    const response = await Axios.post('/AfectaVentas/cantidad/confirmar', params);
    return response.data;
}

export const salesAffectedImportConfirm = async (params) => {
    const response = await Axios.post('/AfectaVentas/importe/confirmar', params);
    return response.data;
}

export const salesAffectedState = async (params) => {
    const response = await Axios.get('/AfectaVentas/estado', { params });
    return response.data;
}

export const salesAffectedStateValidate = async (params) => {
    const response = await Axios.get('/AfectaVentas/estado/Validar', { params });
    return response.data;
}

export const salesAffectedStateConfirm = async (params) => {
    const response = await Axios.post('/AfectaVentas/estado/confirmar', params);
    return response.data;
}