const userItem = 'userData';

export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem(userItem));
};

export const setUsetData = (data) => {
    sessionStorage.setItem(userItem, JSON.stringify(data));
};

export const clearUserData = () => {
    sessionStorage.removeItem(userItem);
};
