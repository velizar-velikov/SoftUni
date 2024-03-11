import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

const host = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export const login = async (email, password) => {
    const userData = await post(host + endpoints.login, { email, password });
    setUserData(userData);
}

export const register = async (email, password) => {
    const userData = await post(host + endpoints.register, { email, password });
    setUserData(userData);
}

export const logout = async () => {
    await get(host + endpoints.logout);
    clearUserData();
}