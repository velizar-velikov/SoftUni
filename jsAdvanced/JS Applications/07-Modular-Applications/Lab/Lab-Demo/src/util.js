const userItem = 'userData';

export const getUserData = () => JSON.parse(sessionStorage.getItem(userItem));

export const setUserData = (data) => sessionStorage.setItem(userItem, JSON.stringify(data));

export const clearUserData = () => sessionStorage.removeItem(userItem);

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);
        const data = Object.fromEntries(entries);

        callback(data, form);
    };
}

export function parseQuery(query) {
    if (!query) {
        return {};
    }

    return Object.fromEntries(query.split('&').map((p) => p.split('=')));
}
