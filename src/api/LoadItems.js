import Axios from 'axios';

export const getLoadItems = async (params) => {
    const response = await Axios.get('/carga_item_vta/consulta', { params });
    return response.data;
}

export const confirmLoadItems = async (params) => {
    const response = await Axios.post('/carga_item_vta', params);
    return response.data;
}

export const confirmTableItems = async (params) => {
    const response = await Axios.post('/carga_item_vta/confirmar', params);
    return response.data;
}
