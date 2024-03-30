import { html } from '../lib/lib.js';

export const layoutTemplate = (userData, content) => html`
    <header>
        <a id="logo" href="/"><img id="logo" src="./images/logo.png" alt="img" /></a>
        <nav>
            <div>
                <a href="/dashboard">Market</a>
            </div>

            ${userData
                ? html` <div class="user">
                      <a href="/create">Sell</a>
                      <a href="/logout">Logout</a>
                  </div>`
                : html` <div class="guest">
                      <a href="/login">Login</a>
                      <a href="/register">Register</a>
                  </div>`}
        </nav>
    </header>

    <main id="main-element">${content}</main>
`;
