import { post } from "../data/api.js";
import { showNav } from "../utils.js";
import { logout } from "./logout.js";

showNav('register');

document.getElementById('logout').addEventListener('click', logout);

const formElement = document.querySelector('form#register');
formElement.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();

    const formData = new FormData(formElement);
    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (email == '' || password == '' || rePass == '') {
        alert('All fields are required!');
        return;
    }

    const responseData = await post('users/register', { email, password, rePass });
    sessionStorage.setItem('user', JSON.stringify(responseData));

    showNav();
    location.href = './index.html';
}