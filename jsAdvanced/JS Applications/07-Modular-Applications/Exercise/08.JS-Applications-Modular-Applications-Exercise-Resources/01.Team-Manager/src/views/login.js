import { login } from '../data/auth.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const loginTemplate = (onLogin, errorMessage) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${onLogin} id="login-form" class="main-form pad-large">
                ${errorMessage ? html`<div class="error">${errorMessage}</div>` : null}
                <label>E-mail: <input type="text" name="email" /></label>
                <label>Password: <input type="password" name="password" /></label>
                <input class="action cta" type="submit" value="Sign In" />
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a></footer>
        </article>
    </section>
`;

export function showLoginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        try {
            const res = await login(email, password);

            if (!res.message) {
                form.reset();
                ctx.goTo('/my-dashboard');
            }
        } catch (error) {
            ctx.render(loginTemplate(createSubmitHandler(onLogin), error.message));
        }
    }
}
