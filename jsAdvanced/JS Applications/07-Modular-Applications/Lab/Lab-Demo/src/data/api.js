import { clearUserData, getUserData } from '../util.js';

async function request(method, url, data) {
    try {
        const response = await fetch(url, createOptions());

        if (!response.ok) {
            if (response.status === 403) {
                //user session has expired
                clearUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return;
        }

        return response.json();
    } catch (error) {
        setTimeout(() => {
            if (!error.handled) {
                alert(error.message);
            }
        }, 1);

        throw error;
    }

    function createOptions() {
        const options = {
            method,
            headers: {},
        };

        const userData = getUserData();

        if (userData) {
            options.headers['X-Authorization'] = userData.accessToken;
        }

        if (data) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        return options;
    }
}

export const get = (url) => request('GET', url);
export const post = (url, data) => request('POST', url, data);
export const put = (url, data) => request('PUT', url, data);
export const del = (url) => request('DELETE', url);
