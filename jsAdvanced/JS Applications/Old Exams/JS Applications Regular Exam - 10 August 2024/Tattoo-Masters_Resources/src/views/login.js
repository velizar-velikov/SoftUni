import { login } from '../data/auth.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/submitHandler.js';
import { saveUserData } from '../utils/userHelper.js';

const loginTemplate = (onLogin) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
    </section>
`;

export async function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        if (email == '' || password == '') {
            return alert('Email and password are required!');
        }

        const data = await login({ email, password });
        saveUserData(data);
        form.reset();
        ctx.goTo('/');
    }
}
