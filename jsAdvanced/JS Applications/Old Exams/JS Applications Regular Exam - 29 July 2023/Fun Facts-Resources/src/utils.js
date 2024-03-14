const userItem = 'userData';

/**
 * Gets userdata from session storage
 * @returns {Object} the parsed userdata object
 */
export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem(userItem));
};

/**
 * Sets userdata in session storage as json
 * @param {Object} data userdata object
 */
export const setUserData = (data) => {
    sessionStorage.setItem(userItem, JSON.stringify(data));
};

/**
 * Clears userdata from session storage
 */
export const clearUserData = () => {
    sessionStorage.removeItem(userItem);
};

/**
 * A function that takes a function as a parameter
 * and returns a function that extracts form data
 * and calls the recieved function parameter with the form data and the form
 * @param {Function} callback function that validates input fields,
 * makes a request with the validated inputs and redirects to another page
 * @returns {Function}
 */
export function createSubmitHandler(callback) {
    /**
     * extracts form data and calls the callback function seen from the closure
     * @param {SubmitEvent} event
     * @returns {void}
     */
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);
        const data = Object.fromEntries(entries);

        callback(data, form);
    };
}
