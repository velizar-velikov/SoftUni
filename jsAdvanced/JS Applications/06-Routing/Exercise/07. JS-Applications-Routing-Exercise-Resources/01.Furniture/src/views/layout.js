import { html } from '../lib.js';

export const layoutTemplate = (userData, content) => html`
    <header>
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/dashboard" class="active">Dashboard</a>
            ${userData
                ? html` <div id="user">
                      <a id="createLink" href="/create">Create Furniture</a>
                      <a id="profileLink" href="/my-dashboard">My Publications</a>
                      <a id="logoutBtn" href="/logout">Logout</a>
                  </div>`
                : html` <div id="guest">
                      <a id="loginLink" href="/login">Login</a>
                      <a id="registerLink" href="/register">Register</a>
                  </div>`}
        </nav>
    </header>
    <main>${content}</main>
`;
