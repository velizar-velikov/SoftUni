const form = document.querySelector('form#register');

form.addEventListener('submit', onRegister);

async function onRegister(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/users/register';
    const formData = new FormData(event.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);

    try {
        if ([...formData.values()].some(value => value.length == 0)) {
            throw new Error('All fields are required!');
        } else if (password != rePass) {
            throw new Error('Passwords must match!');
        }

        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        const user = {
            email: data.email,
            password: data.password,
            id: data._id,
            accessToken: data.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(user));
        location = './index.html';
    } catch (error) {
        form.reset();
        alert(`Error: ${error.message}`);
    }
}