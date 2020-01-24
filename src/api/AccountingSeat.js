import Axios from 'axios';

export const getVoucherAccounting = async (params) => {
    const response = await Axios.get('/Asiento/Comprob', { params });
    return response.data;
}