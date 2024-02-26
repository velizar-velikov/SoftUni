import { get } from "../api/api.js";

export async function logout() {
    await get('users/logout');
    sessionStorage.removeItem('user');
    location.href = './home.html';
}