const userItem = 'userData';

export const getUserData = () => localStorage.getItem(userItem);
export const saveUserData = () => localStorage.setItem(userItem);
export const clearUserData = () => localStorage.removeItem(userItem);

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.target;
        const entries = (new FormData(form)).entries().map(([k, v]) => [k, v.trim()]);
        
        if(entries.some(entry => entry[1].length == 0)) {
            return alert('All fields are required!');
        }
        const data = Object.fromEntries(entries);
        callback(data, form);
    }
}