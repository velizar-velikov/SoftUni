import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './data/auth.js';
import { getUserData } from './utils.js';
import { layoutTemplate } from './views/layout.js';
import { showHomePage } from './views/home.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showRegisterPage } from './views/register.js';
import { showLoginPage } from './views/login.js';
import { showEditPage } from './views/edit.js';
import { showCreatePage } from './views/create.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('/index.html', '/');
page('/', showHomePage);
page('/dashboard', showDashboardPage);
page('/details/:id', showDetailsPage);
page('/details/:id/edit', showEditPage);
page('/create', showCreatePage);
page('/register', showRegisterPage);
page('/login', showLoginPage);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
    await logout();
    ctx.page.redirect('/');
}
