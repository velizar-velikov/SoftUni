import { clearUserData, getUserData } from '../utils/userHelper.js';

async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();

            if (userData && response.status == 403) {
                clearUserData();
            }

            throw new Error(error.message);
        }

        if (response.status == 204) {
            return;
        }

        return response.json();
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export function get(url) {
    return request('GET', url);
}

export function post(url, data) {
    return request('POST', url, data);
}

export function put(url, data) {
    return request('PUT', url, data);
}

export function del(url) {
    return request('DELETE', url);
}
