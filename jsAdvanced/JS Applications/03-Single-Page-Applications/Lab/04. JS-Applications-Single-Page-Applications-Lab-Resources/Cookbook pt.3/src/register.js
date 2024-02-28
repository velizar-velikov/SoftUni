import { post } from "./data/api.js";

export async function register(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (email == '' || password == '' || rePass == '') {
        alert('All fields are required!');
        return;
    } else if (password != rePass) {
        alert('Passwords must match!');
        return console.error('Passwords don\'t match');
    }

    const responseData = await post('users/register', { email, password, rePass });

    sessionStorage.setItem('authToken', responseData.accessToken);
    sessionStorage.setItem('userId', responseData._id);
    ev.target.reset();
}