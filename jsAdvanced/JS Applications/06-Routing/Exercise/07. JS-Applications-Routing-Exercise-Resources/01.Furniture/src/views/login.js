import { login } from '../data/auth.js';
import { html } from '../lib.js';
import { changeNavLinkColour, createSubmitHandler } from '../utils.js';

const loginTemplate = (onLogin) => html`
    <section id="login">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Login User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form @submit=${onLogin}>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="email">Email</label>
                            <input class="form-control" id="email" type="text" name="email" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="password">Password</label>
                            <input class="form-control" id="password" type="password" name="password" />
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    </section>
`;

export function showLoginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));
    changeNavLinkColour('loginLink');

    async function onLogin({ email, password }, form) {
        if (email === '' || password === '') {
            return alert('All fields are required!');
        }

        await login(email, password);

        form.reset();
        ctx.page.redirect('/dashboard');
    }
}
