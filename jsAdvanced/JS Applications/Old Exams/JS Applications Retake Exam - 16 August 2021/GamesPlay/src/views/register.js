import { register } from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const registerTemplate = (onRegister) => html`
    <section id="register-page" class="content auth">
        <form id="register" @submit=${onRegister}>
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" />

                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />

                <input class="btn submit" type="submit" value="Register" />

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, ['confirm-password']: confirmPass }, form) {
        if (!email || !password || !confirmPass) {
            return alert('All fields are required.');
        }

        await register(email, password);
        form.reset();
        ctx.goTo('/');
    }
}
