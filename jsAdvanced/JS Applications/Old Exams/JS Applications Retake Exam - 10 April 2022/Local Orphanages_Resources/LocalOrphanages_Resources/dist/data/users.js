import userHelper from '../utils/userHelper.js';
import api from './api.js';
const host = 'http://localhost:3030';
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};
class UserService {
    async login(email, password) {
        const responseData = await api.post(host + endpoints.login, { email, password });
        userHelper.setUserData(responseData);
        return responseData;
    }
    async register(email, password) {
        const responseData = await api.post(host + endpoints.register, { email, password });
        userHelper.setUserData(responseData);
        return responseData;
    }
    async logout() {
        const response = api.get(host + endpoints.logout);
        userHelper.clearUserData();
        await response;
    }
}
export default new UserService();
