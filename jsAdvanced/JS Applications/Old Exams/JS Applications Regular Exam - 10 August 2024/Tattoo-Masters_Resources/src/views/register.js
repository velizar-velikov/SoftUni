import { register } from '../data/auth.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/submitHandler.js';
import { saveUserData } from '../utils/userHelper.js';

const registerTemplate = (onRegister) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit="${onRegister}">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export async function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, 're-password': rePass }, form) {
        if (email == '' || password == '') {
            return alert('Email and password are required!');
        } else if (password != rePass) {
            return alert('Passwords must match!');
        }

        const data = await register({ email, password });
        saveUserData(data);
        form.reset();
        ctx.goTo('/');
    }
}
