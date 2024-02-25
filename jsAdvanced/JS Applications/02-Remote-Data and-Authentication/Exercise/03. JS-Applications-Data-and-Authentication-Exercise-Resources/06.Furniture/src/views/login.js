import { post } from "../api/api.js";

const formElement = document.querySelector('form[action="/login"]');
formElement.addEventListener('submit', loginUser);

async function loginUser(e) {
    e.preventDefault();

    const formData = new FormData(formElement);

    const { email, password } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    const response = await post('users/login', { email, password });

    sessionStorage.setItem('user', JSON.stringify(response));
    location.href = './homeLogged.html';
}