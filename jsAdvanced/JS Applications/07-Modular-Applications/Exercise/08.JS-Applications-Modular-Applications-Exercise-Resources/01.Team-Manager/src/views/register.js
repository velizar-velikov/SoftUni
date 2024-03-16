import { register } from '../data/auth.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const registerTemplate = (onRegister, errorMessage) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onRegister} id="register-form" class="main-form pad-large">
                ${errorMessage ? html` <div class="error">${errorMessage}</div>` : null}

                <label>E-mail: <input type="text" name="email" /></label>
                <label>Username: <input type="text" name="username" /></label>
                <label>Password: <input type="password" name="password" /></label>
                <label>Repeat: <input type="password" name="repass" /></label>
                <input class="action cta" type="submit" value="Create Account" />
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a></footer>
        </article>
    </section>
`;

export function showRegisterPage(ctx) {
    let data;

    async function onRegister(formData, form) {
        data = formData;
        const { email, username, password, repass } = formData;

        let errorMessage = getErrorMessage();

        if (errorMessage) {
            ctx.render(registerTemplate(createSubmitHandler(onRegister), errorMessage));
        } else {
            try {
                const res = await register(email, username, password);

                if (!res.message) {
                    form.reset();
                    ctx.goTo('/my-dashboard');
                }
            } catch (error) {
                errorMessage = error.message;
                ctx.render(registerTemplate(createSubmitHandler(onRegister), errorMessage));
            }
        }
    }

    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    function getErrorMessage() {
        let errorMessage;
        if (!data.email) {
            //validation
            //TODO: validate email for a valid email
            errorMessage = 'Valid email is required.';
        } else if (data.username.length < 3) {
            errorMessage = 'Username should be at least 3 characters long.';
        } else if (data.password.length < 3) {
            errorMessage = 'Password must be at least 3 character long.';
        } else if (data.password !== data.repass) {
            errorMessage = 'Passwords must match!';
        }
        return errorMessage;
    }
}
