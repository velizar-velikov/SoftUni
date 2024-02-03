import * as api from './api/api.js';
import { showCatalog } from './views/catalog.js';

const loginForm = document.getElementById('loginForm');

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);

export async function onLogout(e) {

    if (localStorage.getItem('user')) {
        await api.get('users/logout');
        localStorage.removeItem('user');
        showCatalog();

    }
}