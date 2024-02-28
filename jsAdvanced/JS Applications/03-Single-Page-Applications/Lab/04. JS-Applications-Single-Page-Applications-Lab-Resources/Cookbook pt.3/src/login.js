import { post } from "./data/api.js";

export async function login(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    const responseData = await post('users/login', { email, password });

    sessionStorage.setItem('authToken', responseData.accessToken);
    sessionStorage.setItem('userId', responseData._id);
    ev.target.reset();
}