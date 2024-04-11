import { UserData } from '../types/userData.js';
import userHelper from '../utils/userHelper.js';
import api from './api.js';

const host = 'http://localhost:3030';

interface UserEndpoints {
    login: string;
    register: string;
    logout: string;
}

const endpoints: UserEndpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

interface UserServiceType {
    login(email: string, password: string): Promise<UserData>;
    register(email: string, password: string): Promise<UserData>;
    logout(): Promise<void>;
}

class UserService implements UserServiceType {
    async login(email: string, password: string): Promise<UserData> {
        const responseData: UserData = await api.post(host + endpoints.login, { email, password });

        userHelper.setUserData(responseData);
        return responseData;
    }

    async register(email: string, password: string): Promise<UserData> {
        const responseData: UserData = await api.post(host + endpoints.register, { email, password });
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
