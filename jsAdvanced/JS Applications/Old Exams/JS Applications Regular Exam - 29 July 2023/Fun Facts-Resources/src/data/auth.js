import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";


/**
 * Authentication module
 * @module auth
 */

/**
 * Host to make requests for user authentication
 * @type {String}
 */
const host = 'http://localhost:3030';

/**
 * Object with endpoints for user authentication
 * @type {{login: String, register: String, logout: String}}
 */
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

/**
 * Sends user email and password to the server for login
 * and sets the returned userdata in browser storage
 * @param {String} email user email
 * @param {String} password user password
 * @returns {void}
 */
export const login = async (email, password) => {
    const userData = await post(host + endpoints.login, { email, password });
    setUserData(userData);
}

/**
 * Sends user email and password to the server for registration
 * and sets the returned userdata in browser storage
 * @param {String} email user email
 * @param {String} password user password
 * @returns {void}
 */
export const register = async (email, password) => {
    const userData = await post(host + endpoints.register, { email, password });
    setUserData(userData);
}

/**
 * Makes a logout request to the server
 * and clears userdata from browser storage
 * @returns {void}
 */
export const logout = async () => {
    await get(host + endpoints.logout);
    clearUserData();
}