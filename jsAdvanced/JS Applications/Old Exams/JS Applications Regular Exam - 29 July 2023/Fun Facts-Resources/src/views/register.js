import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler, setUserData } from "../utils.js";

const registerTemplate = (onRegister) => html`
 <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onRegister} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;

export function showRegisterPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)));

  async function onRegister({ email, password, ['re-password']: rePass }, form) {

    if (email == '' || password == '' || rePass == '') {
      return alert('All fields are required!');
    } else if (password !== rePass) {
      return alert('Passwords must match!');
    }

    const data = await register(email, password);
    ctx.page.redirect('/');
  }
}