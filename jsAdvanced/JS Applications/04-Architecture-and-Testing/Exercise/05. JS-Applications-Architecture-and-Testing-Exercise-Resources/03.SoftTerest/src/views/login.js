import * as  api from '../api/api.js';
import { showHome } from './home.js';

const section = document.getElementById('loginPage');

export function showLogin(context) {
    context.showSection(section);
}

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', onLogin);

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!email || !password) {
        alert('All input fields are required!');
        return;
    }
    loginForm.reset();

    const data = await api.post('users/login', { email, password });
    if (data.accessToken == JSON.parse(localStorage.getItem('user').accessToken)) {
        localStorage.setItem('user', JSON.stringify(data));
        showHome(context);
    }
}