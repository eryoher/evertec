import Axios from 'axios';

export const getClientHeadboard = async (params) => {
    const response = await Axios.get('/Comprobante/vistafinal', { params });
    return response.data;
}

export const changeTableItems = async (params) => {
    const response = await Axios.get('/Comprobante/vistafinal/items', { params });
    return response.data;
}

export const changeTableAffect = async (params) => {
    const response = await Axios.get('/Comprobante/vistafinal/afec', { params });
    return response.data;
}

export const getGenerateItems = async (params) => {
    const response = await Axios.get('/vta_generar_compr/ítems_agregados');
    return response.data;
}

export const finishGenerate = async (params) => {
    //const response = await Axios.post('/vta_generar_compr/generar', params);
    const response = await Axios.post('/Comprobante/confirmar', params);

    return response.data;
}

export const printGenerate = async (params) => {
    const response = await Axios.post('/vta_generar_compr/imprimir', params);
    return response.data;
}

export const getGeneratesalesAffected = async (params) => {
    const response = await Axios.get('/vta_generar_compr/comprob_afectados');
    return response.data;
}