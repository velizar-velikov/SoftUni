import { clearUserData, setUserData } from '../utils/userHelper.js';
import { ApiService } from './api.js';
const api = new ApiService();
const host = 'http://localhost:3030';
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};
export class UserService {
    async login(email, password) {
        const responseData = await api.post(host + endpoints.login, { email, password });
        setUserData(responseData);
        return responseData;
    }
    async register(email, password) {
        const responseData = await api.post(host + endpoints.register, { email, password });
        setUserData(responseData);
        return responseData;
    }
    async logout() {
        const response = api.get(host + endpoints.logout);
        clearUserData();
        await response;
    }
}
