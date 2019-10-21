import Axios from 'axios';

export const salesAffectedValidate = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad/Validar', { params: params });
    return response.data;
}

export const salesAffectedCant = async (params) => {
    const response = await Axios.get('/AfectaVentas/Cantidad', { params: params });
    return response.data;
}

export const salesAffectedSubCalculation = async (params) => {
    const response = await Axios.get('/AfectaVentas/Cantidad/CalculoSubtotales', params);
    return response.data;
}

export const salesAffectedConfirm = async (params) => {
    const response = await Axios.get('/AfectaVentas/cantidad/confirmar', params);
    return response.data;
}