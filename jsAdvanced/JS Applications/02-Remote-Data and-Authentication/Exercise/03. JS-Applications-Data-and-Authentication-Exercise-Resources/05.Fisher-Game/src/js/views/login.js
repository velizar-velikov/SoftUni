import { post } from "../data/api.js";
import { loadAllCatches } from "../data/loadCatches.js";
import { showNav } from "../utils.js";
import { logout } from "./logout.js";

document.getElementById('logout').addEventListener('click', logout);

showNav('login');
const formElement = document.querySelector('form#login');
formElement.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();

    const formData = new FormData(formElement);
    const { email, password } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    const responseData = await post('users/login', { email, password });
    sessionStorage.setItem('user', JSON.stringify(responseData));

    showNav();
    location.href = './index.html';
}