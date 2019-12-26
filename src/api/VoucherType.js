import Axios from 'axios';

export const getVoucherType = async (params) => {
  const response = await Axios.get('/TipoDeComprobante', { params });
  return response.data;
}

export const getVoucherTypeByUser = async () => {
  const response = await Axios.get('Comprobantes/usuario');
  return response.data;
}

export const voucherCancel = async (params) => {
  const response = await Axios.get('/TipoDeComprobante/Cancelar', { params });
  return response.data;
}