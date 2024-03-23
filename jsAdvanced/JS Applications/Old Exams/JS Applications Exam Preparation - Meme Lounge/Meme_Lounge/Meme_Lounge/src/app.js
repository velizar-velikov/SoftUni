import { page } from './lib/lib.js';

import { addGoTo } from './middlewares/redirect.js';
import { renderer } from './middlewares/render.js';
import { session } from './middlewares/session.js';

import { showHome } from './views/home.js';
import { showDashboard } from './views/dashboard.js';
import { showUserDashboard } from './views/user-dashboard.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showEditPage } from './views/edit.js';

import { logout } from './data/users.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

page(renderer(document.getElementById('container')));
page(addGoTo());
page('/index.html', '/dashboard');
page('/', showHome);
page('/dashboard', showDashboard);
page('/my-profile', session(), showUserDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/details/:id/edit', showEditPage);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', logoutAction);

page.start();

async function logoutAction(ctx) {
    await logout();
    ctx.goTo('/');
}
