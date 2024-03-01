import { post } from "../data/api.js";
import { showSection, showWelcomeMessage, updateNav } from "../util.js";

export async function login(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }

    const responseData = await post('users/login', { email, password });

    sessionStorage.setItem('user', JSON.stringify(responseData));

    showSection('home-page');
    updateNav();
    showWelcomeMessage(email);
}