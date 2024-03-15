import { clearUserData, setUsetData } from '../utils/userHelper.js';
import { get, post } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export const login = async (email, password) => {
    const userData = await post(host + endpoints.login, { email, password });
    setUsetData(userData);
    return userData;
};

export const register = async (email, username, password) => {
    const userData = await post(host + endpoints.register, { email, username, password });
    setUsetData(userData);
    return userData;
};

export const logout = async () => {
    await get(host + endpoints.logout);
    clearUserData();
};
