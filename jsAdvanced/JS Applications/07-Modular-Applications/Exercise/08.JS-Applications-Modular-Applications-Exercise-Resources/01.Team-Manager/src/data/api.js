import { clearUserData, getUserData } from '../utils/userHelper.js';

export async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();

            if (error.code === 403) {
                //user session has expired
                clearUserData();
            }
            throw error;
        }

        if (response.status === 204) {
            //logout- no content
            return;
        }

        const data = await response.json();

        return data;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {},
    };

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export const get = (url) => request(url, createOptions());
export const post = (url, data) => request(url, createOptions('POST', data));
export const put = (url, data) => request(url, createOptions('PUT', data));
export const del = (url) => request(url, createOptions('DELETE'));
