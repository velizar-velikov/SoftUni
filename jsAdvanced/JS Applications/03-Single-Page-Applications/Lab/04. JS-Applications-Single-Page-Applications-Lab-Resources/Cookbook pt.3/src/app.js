import { login } from "./login.js";
import { register } from "./register.js";
import { create } from "./create.js";
import { logout, showHome, showSection } from "./utils.js";

const links = {
    '/recipes': showSection,
    '/login': showSection,
    '/register': showSection,
    '/create': showSection,
    '/logout': logout
};

document.querySelector('nav').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        if (e.target.id == 'logoutBtn') return;
        const path = e.target.pathname;
        const id = path.slice(1);
        links[path](id);
    }
});

window.addEventListener('load', (ev) => showHome(links));
document.getElementById('logoutBtn').addEventListener('click', logout);

//registerForm
document.getElementById('registerForm').addEventListener('submit', async (ev) => {
    await register(ev);
    showHome(links);
});

//loginForm
document.getElementById('loginForm').addEventListener('submit', async (ev) => {
    await login(ev);
    showHome(links);
});

//createForm
document.getElementById('createForm').addEventListener('submit', async (ev) => {
    await create(ev);
    showHome(links);
});