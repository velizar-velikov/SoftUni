import { login } from '../data/auth.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const logintemplate = (onLogin) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
    </section>
`;

export function showLoginView(ctx) {
    ctx.render(logintemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        if (!email) {
            return alert('Email is required.');
        } else if (!password) {
            return alert('Password is required.');
        }

        await login({ email, password });

        ctx.goTo('/');
    }
}
