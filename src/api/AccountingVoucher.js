import Axios from 'axios';

export const getVoucherTaxes = async (params) => {
    const response = await Axios.get('/Impuestos/Comprob', { params });
    return response.data;
}
