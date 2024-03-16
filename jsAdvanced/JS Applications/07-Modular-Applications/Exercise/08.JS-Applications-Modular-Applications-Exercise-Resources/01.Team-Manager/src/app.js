import { logout } from './data/auth.js';
import { page, render } from './lib.js';
import { clearUserData, getUserData } from './utils/userHelper.js';
import { showCreatePage } from './views/create.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showHomePage } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { showLoginPage } from './views/login.js';
import { showMyDashboard } from './views/my-dashboard.js';
import { showRegisterPage } from './views/register.js';

const root = document.getElementById('content');

page(decorateContext);
page('/index.html', '/');
page('/', showHomePage);
page('/create', showCreatePage);
page('/dashboard', showDashboardPage);
page('/my-dashboard', showMyDashboard);
page('/details/:id', showDetailsPage);
page('/details/:id/edit', showEditPage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/logout', logoutAction);

page.start();

//middleware
function decorateContext(ctx, next) {
    ctx.render = renderView;
    ctx.goTo = page.redirect;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
    await logout();
    clearUserData();
    ctx.goTo('/');
}
