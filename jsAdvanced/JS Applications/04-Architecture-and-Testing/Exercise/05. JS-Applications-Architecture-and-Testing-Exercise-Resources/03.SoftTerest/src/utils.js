import * as api from './api/api.js';
import { ideasSection, showCatalog } from './views/catalog.js';
import { ctx } from './router.js';

const loginForm = document.getElementById('loginForm');

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);

export async function onLogout(e) {

    if (localStorage.getItem('user')) {
        await api.get('users/logout');
        localStorage.removeItem('user');
        // document.getElementById('root').replaceChildren(ideasSection);
        showCatalog(ctx);

        (function updateNav() {
            const nav = document.querySelector('nav');
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        })();
    }
}