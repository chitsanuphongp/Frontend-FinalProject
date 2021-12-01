import { server, api_auth } from '../constants';
import httpClient from '../httpClient';

export const register = async (values) => {
  const res = httpClient.post(server.AUTH_URL+api_auth.REGISTER_URL, values);
  if (res.data.result == 'ok') {
    return true;
  } else {
    return false;
  }
};

// auth
export const jwtAuth = async () => {
  const res = await httpClient.get(server.AUTH_URL+api_auth.JWT_VERIFY);
  if(res === 401) {
    localStorage.removeItem(server.TOKEN_KEY);
    return {auth: false, data: 'token expired'}
  }

  if (res.data.result == 'OK') {
    return {auth: true, data: res.data.data}
  } else {
    return {auth: false, data: res.data.message}
  }
}

export const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
}; //ถ้ามี return true

export const logout= () => {
  localStorage.removeItem(server.TOKEN_KEY);
};

export const login = async (values) => {
  const res = await httpClient.post(server.AUTH_URL+api_auth.LOGIN_URL, values);

  if (res.data.result == 'OK') {
    localStorage.setItem(server.TOKEN_KEY, res.headers.authorization.split(' ')[1]);
    return {auth: true, data: res.data.data}
  } else {
    return {auth: false, data: res.data.message}
  }
};
