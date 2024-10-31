const userItem = 'userData';

export const getUserData = () => JSON.parse(localStorage.getItem(userItem));

export const saveUserData = (data) => localStorage.setItem(userItem, JSON.stringify(data));

export const clearUserData = () => localStorage.removeItem(userItem);
