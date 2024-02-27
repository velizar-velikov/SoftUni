import { get } from "../data/api.js";

export async function logout() {
    await get('users/logout');
    sessionStorage.removeItem('user');
    location.href = './index.html';
}