import { html } from '../lib/lib.js';

export const layoutTemplate = (userData, content) => html`
    <header>
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="logo" /> </a>
        <nav>
            <a href="/dashboard">Collection</a>
            ${userData
                ? html` <div class="user">
                      <a href="/create">Add Tattoo</a>
                      <a id="logout" href="/logout">Logout</a>
                  </div>`
                : html`
                      <div class="guest">
                          <a href="/login">Login</a>
                          <a href="/register">Register</a>
                      </div>
                  `}
        </nav>
    </header>
    <main>${content}</main>
`;
