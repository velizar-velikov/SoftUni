import { clearUserData, getUserData } from '../utils/userHelper.js';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Header = {
    'Content-Type'?: string;
    'X-Authorization'?: string;
};
type Options = {
    method: Method;
    headers: Header;
    body?: string;
};

export class ApiService {
    async get(url: string) {
        return await this.request(url, this.createOptions('GET'));
    }

    async post(url: string, data) {
        return await this.request(url, this.createOptions('POST', data));
    }

    async put(url: string, data) {
        return await this.request(url, this.createOptions('PUT', data));
    }

    async delete(url: string) {
        return await this.request(url, this.createOptions('DELETE'));
    }

    private async request(url: string, options: Options) {
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

    private createOptions(method: Method, body?): Options {
        const options: Options = {
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
