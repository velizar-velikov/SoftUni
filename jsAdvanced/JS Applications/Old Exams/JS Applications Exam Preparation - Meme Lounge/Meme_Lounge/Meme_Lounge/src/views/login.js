import { login } from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify, removeBorders } from './notifications.js';

const loginTemplate = (onLogin) => html`
    <section id="login">
        <form id="login-form" @submit=${onLogin}>
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text" />
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password" />
                <input type="submit" class="registerbtn button" value="Login" />
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        removeBorders(form);

        if (!email) {
            form.querySelector('#email').style.border = '2px solid red';
        }
        if (!password) {
            form.querySelector('#password').style.border = '2px solid red';
        }

        if (!email || !password) {
            notify('All fields are required');
            return;
        }

        try {
            await login(email, password);
            form.reset();
            ctx.goTo('/dashboard');
        } catch (error) {
            notify(error.message);
            form.querySelector('#password').style.border = '2px solid red';
            error.handled = true;
        }
    }
}
