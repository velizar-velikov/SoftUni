import { clearUserData, getUserData } from '../utils/userHelper.js';
export class ApiService {
    async get(url) {
        return await this.request(url, this.createOptions('GET'));
    }
    async post(url, data) {
        return await this.request(url, this.createOptions('POST', data));
    }
    async put(url, data) {
        return await this.request(url, this.createOptions('PUT', data));
    }
    async delete(url) {
        return await this.request(url, this.createOptions('DELETE'));
    }
    async request(url, options) {
        const response = await fetch(url, options);
        if (!response.ok) {
            if (response.status === 403) {
                //user session has expired
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status === 204) {
            //logout - no-content
            return response;
        }
        const data = await response.json();
        return data;
    }
    createOptions(method, body) {
        const options = {
            method,
            headers: {},
        };
        if (body) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }
        const userData = getUserData();
        if (userData) {
            options.headers['X-Authorization'] = userData.accessToken;
        }
        return options;
    }
}
