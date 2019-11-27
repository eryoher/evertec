import Axios from 'axios';

export const getVoucherType = async (params) => {
  const response = await Axios.get('/TipoDeComprobante', { params });
  return response.data;
}

export const getVoucherTypeByUser = async () => {
  console.log('hola')
  const response = await Axios.get('Comprobantes/usuario');
  console.log(response, 'comprobantes')
  return response.data;
}