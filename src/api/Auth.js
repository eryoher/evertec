import Axios from 'axios';

export const signInUser = async ({ user, pass }) => {
  const response = await Axios.post('/login', {
    user,
    pass
  });
  return response.data;
}

export const getUser = async () => {
  const response = await Axios.get('/usuario');
  return response.data;
}

export const getPermissions = async () => {
  const response = await Axios.get('/permisos');
  return response.data;
}