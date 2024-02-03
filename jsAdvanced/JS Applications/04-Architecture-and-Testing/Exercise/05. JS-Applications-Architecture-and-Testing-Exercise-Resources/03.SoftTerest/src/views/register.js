import * as  api from '../api/api.js';
import { showHome } from './home.js';

const section = document.getElementById('registerPage');

export function showRegister(context) {
    context.showSection(section);
}

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', onRegister);

async function onRegister(e) {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    console.log(email, password, repeatPassword);
    if (!email || !password || !repeatPassword) {
        alert('All input fields are required!');
        return;
    }
    registerForm.reset();

    const data = await api.post('users/register', { email, password });
    localStorage.setItem('user', JSON.stringify(data));
    showHome(context);
}