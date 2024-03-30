import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { register } from '../data/users.js';
import { notify } from './notification.js';

const registerTemplate = (onRegister) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onRegister}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export function showRegisterView(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, ['re-password']: rePass }, form) {
        if (!email) {
            notify('Email is required.');
            return;
        } else if (!password) {
            notify('Password is required.');
            return;
        } else if (password !== rePass) {
            notify("Passwords don't match.");
            return;
        }

        try {
            await register(email, password);
            form.reset();
            ctx.goTo('/');
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
