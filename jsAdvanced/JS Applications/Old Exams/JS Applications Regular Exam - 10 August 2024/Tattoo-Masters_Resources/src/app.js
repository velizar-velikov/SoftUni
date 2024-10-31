import { logout } from './data/auth.js';
import { page } from './lib/lib.js';
import { addGoTo } from './middlewares/redirect.js';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { showAddPage } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const root = document.getElementById('content');

page(addRender(root));
page(addGoTo());
page('/index.html', '/');
page('/', showHome);
page('/dashboard', showDashboard);
page('/create', showAddPage);
page('/login', showLogin);
page('/register', showRegister);
page('/details/:id', addSession(), showDetails);
page('/details/:id/edit', showEditPage);
page('/logout', logoutAction);

page.start();

async function logoutAction(ctx) {
    await logout();
    ctx.page.redirect('/');
}
