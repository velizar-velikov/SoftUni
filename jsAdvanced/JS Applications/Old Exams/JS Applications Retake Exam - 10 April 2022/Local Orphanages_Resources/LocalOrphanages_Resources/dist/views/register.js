import userService from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
const registerTemplate = (onRegister) => html `
    <section id="register-page" class="auth">
        <form id="register" @submit=${onRegister}>
            <h1 class="title">Register</h1>

            <article class="input-group">
                <label for="register-email">Email: </label>
                <input type="email" id="register-email" name="email" />
            </article>

            <article class="input-group">
                <label for="register-password">Password: </label>
                <input type="password" id="register-password" name="password" />
            </article>

            <article class="input-group">
                <label for="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword" />
            </article>

            <input type="submit" class="btn submit-btn" value="Register" />
        </form>
    </section>
`;
export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));
    async function onRegister({ email, password, repeatPassword }, form) {
        if (!email || !password || !repeatPassword) {
            return alert('All fields are required!');
        }
        else if (password !== repeatPassword) {
            return alert('Passwords must match!');
        }
        await userService.register(email, password);
        form.reset();
        ctx.goTo('/dashboard');
    }
}
