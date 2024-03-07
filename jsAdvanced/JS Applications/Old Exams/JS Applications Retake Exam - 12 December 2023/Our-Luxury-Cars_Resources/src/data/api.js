import { clearUserData, getUserData } from "../util.js";

async function request(method, url, data) {

    const options = {
        method
    };

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        };
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

export const get = () => request('GET', url);
export const post = () => request('POST', url, data);
export const put = () => request('PUT', url, data);
export const del = () => request('DELETE', url);