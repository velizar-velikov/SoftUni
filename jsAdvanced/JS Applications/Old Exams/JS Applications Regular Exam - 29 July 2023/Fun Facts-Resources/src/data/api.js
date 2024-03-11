import { clearUserData, getUserData } from "../utils.js";

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    const userData = getUserData();

    if (data) {
        options.body = JSON.stringify(data);
    }

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            if (response.status == 403) {
                //user session has expired
                clearUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return;
        }
        const result = response.json();

        return result;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = (url) => request('GET', url);
export const post = (url, data) => request('POST', url, data);
export const put = (url, data) => request('PUT', url, data);
export const del = (url) => request('DELETE', url);