import { html } from '../lib/lib.js';

export const layoutTemplate = (userData, content: HTMLTemplateElement) => html`
    <header>
        <h1><a href="/dashboard">Orphelp</a></h1>
        <nav>
            <a href="/dashboard">Dashboard</a>

            ${userData
                ? html` <div id="user">
                      <a href="/my-dashboard">My Posts</a>
                      <a href="/create">Create Post</a>
                      <a href="/logout">Logout</a>
                  </div>`
                : html` <div id="guest">
                      <a href="/login">Login</a>
                      <a href="/register">Register</a>
                  </div>`}
        </nav>
    </header>

    <main id="main-content">${content}</main>
`;
