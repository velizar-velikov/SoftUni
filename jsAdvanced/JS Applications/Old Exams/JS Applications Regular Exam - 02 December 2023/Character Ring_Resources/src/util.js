const userItem = 'userData';

export const getUserData = () => JSON.parse(localStorage.getItem(userItem));
export const saveUserData = (userData) => localStorage.setItem(userItem, JSON.stringify(userData));
export const clearUserData = () => localStorage.removeItem(userItem);

export const isOwner = (ownerId) => ownerId === getUserData()?._id;

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        const data = Object.fromEntries(entries);
        callback(data, form);
    }
}