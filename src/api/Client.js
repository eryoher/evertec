import Axios from 'axios';

export const getClient = async (params) => {
  const response = await Axios.get('/Clientes/Consulta', { params });
  return response.data;
}

export const searchClients = async (params) => {
  const response = await Axios.get('/Clientes/Seleccion', { params });
  return response.data;
}

export const confirmationClient = async (params) => {
  const response = await Axios.get('/Clientes/Seleccion/Confirmar', { params });
  return response.data;
}