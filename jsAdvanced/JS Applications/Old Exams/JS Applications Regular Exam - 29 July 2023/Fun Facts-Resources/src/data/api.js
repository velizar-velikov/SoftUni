import { clearUserData, getUserData } from "../utils.js";

/**
 * Api module
 * @module api
 */

/**
 * 
 * @param {String} method HTTP method
 * @param {String} url url to make a request to
 * @param {Object} [data] data to send with the request
 * @returns {Promise} response body as promise
 */
async function request(method, url, data) {

    /**
     * @type {{method: String, headers: Object, [body]: JSON}}
     */
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

/**
 * Makes GET request to url end returns response body
 * @param {String} url url to make a request to
 * @returns {Promise} response body as promise
 */
export const get = (url) => request('GET', url);

/**
 * Makes POST request to url end returns response body
 * @param {String} url url to make a request to
 * @param {Object} data data to send with the request
 * @returns {Promise} response body as promise
 */
export const post = (url, data) => request('POST', url, data);

/**
 * Makes PUT request to url end returns response body
 * @param {String} url url to make a request to
 * @param {Object} data data to send with the request
 * @returns {Promise} response body as promise
 */
export const put = (url, data) => request('PUT', url, data);

/**
 * Makes DELETE request to url
 * @param {String} url url to make a request to
 * @returns {Promise} response with no content
 */
export const del = (url) => request('DELETE', url);