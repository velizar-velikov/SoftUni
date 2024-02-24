import { post } from "../api/api.js";

const formElement = document.querySelector('form');
formElement.addEventListener('submit', registerUser);

async function registerUser(e) {
    e.preventDefault();

    const formData = new FormData(formElement);

    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (email == '' || password == '' || rePass == '') {
        alert('All fields are required!');
        return;
    } else if (password !== rePass) {
        alert('Passwords must match!');
        return;
    }

    const response = await post('users/register', { email, password, rePass });

    sessionStorage.setItem('user', JSON.stringify(response));
    location.href = '../../index.html';
}