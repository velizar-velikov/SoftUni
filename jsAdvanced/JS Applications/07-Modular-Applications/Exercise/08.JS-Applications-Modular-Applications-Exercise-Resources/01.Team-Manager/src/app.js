import { logout } from './data/auth.js';
import { page } from './lib/lib.js';

import { addGoTo } from './middlewares/redirect.js';
import { renderer } from './middlewares/render.js';
import { session } from './middlewares/session.js';

import { clearUserData } from './utils/userHelper.js';
import { showCreatePage } from './views/create.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showHomePage } from './views/home.js';
import { showLoginPage } from './views/login.js';
import { showMyDashboard } from './views/my-dashboard.js';
import { showRegisterPage } from './views/register.js';

const root = document.getElementById('content');

//middlewares
page(renderer(root));
page(addGoTo());

page('/index.html', '/');
page('/', showHomePage);
page('/create', showCreatePage);
page('/dashboard', session(), showDashboardPage);
page('/my-dashboard', session(), showMyDashboard);
page('/details/:id', session(), showDetailsPage);
page('/details/:id/edit', showEditPage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/logout', logoutAction);

page.start();

async function logoutAction(ctx) {
    await logout();
    clearUserData();
    ctx.goTo('/');
}
