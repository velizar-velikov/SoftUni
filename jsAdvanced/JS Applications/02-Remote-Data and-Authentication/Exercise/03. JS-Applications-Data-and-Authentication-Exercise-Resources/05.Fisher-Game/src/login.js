document.getElementById('logout').style.display = 'none';
const form = document.querySelector('form#login');

const loginBtn = document.querySelector('button');
form.addEventListener('submit', loginUser);

async function loginUser(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = 'http://localhost:3030/users/login';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }
        const { email, password } = Object.fromEntries(formData);
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (email.length == 0 || password.length == 0) {
            throw new Error('All fields are required!');

        } else if (email != userData.email || password != userData.password) {
            throw new Error('Invalid email or password!');
        }
        location = './index.html';
    } catch (error) {
        form.reset();
        alert(`Error: ${error.message}`);
    }
}