import { clearUserData, setUserData } from '../utils/userHelper.js';
import { get, post } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export const login = async (email, password) => {
    const responseData = await post(host + endpoints.login, { email, password });
    setUserData(responseData);
};

export const register = async (email, password) => {
    const responseData = await post(host + endpoints.register, { email, password });
    setUserData(responseData);
};

export const logout = async () => {
    const response = get(host + endpoints.logout);
    clearUserData();
    await response;
};
