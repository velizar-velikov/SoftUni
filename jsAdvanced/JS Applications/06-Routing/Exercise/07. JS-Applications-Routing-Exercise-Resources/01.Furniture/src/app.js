import { logout } from './data/auth.js';
import { page, render } from './lib.js';
import { getUserData } from './utils/userHelper.js';
import { showCreatePage } from './views/create.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { layoutTemplate } from './views/layout.js';
import { showLoginPage } from './views/login.js';
import { showMyDashboardPage } from './views/my-dashboard.js';
import { showRegisterPage } from './views/register.js';

const root = document.querySelector('body');

page(decorateContext);
page('/index.html', '/');
page('/', showDashboardPage);
page('/dashboard', showDashboardPage);
page('/my-dashboard', showMyDashboardPage);
page('/details/:id', showDetailsPage);
page('/details/:id/edit', showEditPage);
page('/register', showRegisterPage);
page('/login', showLoginPage);
page('/create', showCreatePage);
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
    ctx.page.redirect('/dashboard');
}
