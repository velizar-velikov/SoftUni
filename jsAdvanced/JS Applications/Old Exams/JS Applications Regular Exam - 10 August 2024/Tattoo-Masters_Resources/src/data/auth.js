import { clearUserData, saveUserData } from '../utils/userHelper.js';
import { get, post } from './api.js';

const url = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(data) {
    const responseData = await post(url + endpoints.login, data);
    saveUserData(responseData);
    return responseData;
}

export async function register(data) {
    const responseData = await post(url + endpoints.register, data);
    saveUserData(responseData);
    return responseData;
}

export async function logout() {
    const response = await get(url + endpoints.logout);
    clearUserData();
}
