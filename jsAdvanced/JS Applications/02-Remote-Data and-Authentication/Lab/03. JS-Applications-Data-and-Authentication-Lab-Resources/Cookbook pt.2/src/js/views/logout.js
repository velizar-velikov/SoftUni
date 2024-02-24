import { get } from "../api/api.js";
import { showNavBar } from "../utils.js";

export async function logout() {

    await get('users/logout');

    sessionStorage.removeItem('user');
    showNavBar();
}