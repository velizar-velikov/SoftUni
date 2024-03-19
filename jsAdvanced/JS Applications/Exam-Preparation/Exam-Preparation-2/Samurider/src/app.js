import { logout } from './data/auth.js';
import { render, page } from './lib/lib.js';
import { getUserData } from './utils/userHelper.js';
import { showCreateView } from './views/create.js';
import { showDashboardView } from './views/dashboard.js';
import { showDetailsView } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showHomeView } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { showLoginView } from './views/login.js';
import { showRegisterView } from './views/register.js';
import { showSearchView } from './views/search.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('/index.html', '/');
page('/', showHomeView);
page('/create', showCreateView);
page('/dashboard', showDashboardView);
page('/details/:id', showDetailsView);
page('/details/:id/edit', showEditView);
page('/search', showSearchView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutAction);

page.start();

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
    ctx.goTo('/');
}
