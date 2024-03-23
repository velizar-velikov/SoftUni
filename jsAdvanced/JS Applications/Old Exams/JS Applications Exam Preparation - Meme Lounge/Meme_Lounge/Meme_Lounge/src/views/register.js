import { register } from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify, removeBorders } from './notifications.js';

const registerTemplate = (onRegister) => html`
    <section id="register">
        <form id="register-form" @submit=${onRegister}>
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username" />
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email" />
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password" />
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked />
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register" />
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ username, email, password, repeatPass }, form) {
        const gender = [...form.querySelectorAll('input[type="radio"]')].find((radio) => radio.checked).id;

        removeBorders(form);

        if (!username) {
            form.querySelector('#username').style.border = '2px solid red';
        }
        if (!email) {
            form.querySelector('#email').style.border = '2px solid red';
        }
        if (!password) {
            form.querySelector('#password').style.border = '2px solid red';
        }
        if (!repeatPass) {
            form.querySelector('#repeatPass').style.border = '2px solid red';
        }

        if ([username, email, password, repeatPass].some((f) => f === '')) {
            notify('All fields are required.');
            return;
        }

        if (password !== repeatPass) {
            notify('Passwords must match');
            form.querySelector('#password').style.border = '2px solid red';
            form.querySelector('#repeatPass').style.border = '2px solid red';
            return;
        }

        try {
            await register(username, email, password, gender);
            form.reset();
            ctx.goTo('/dashboard');
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
