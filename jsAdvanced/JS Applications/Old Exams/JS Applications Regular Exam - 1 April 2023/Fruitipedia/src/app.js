import { logout } from './data/auth.js';
import { page } from './lib/lib.js';
import { addGoTo } from './middlewares/redirectMiddleware.js';
import { addRender } from './middlewares/renderMiddleware.js';
import { showCreateView } from './views/create.js';
import { showDashboardView } from './views/dashboard.js';
import { showDetailsView } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showHomeView } from './views/home.js';
import { showLoginView } from './views/login.js';
import { showRegisterView } from './views/register.js';
import { showSearchView } from './views/search.js';

//middlewares
page(addRender);
page(addGoTo);

page('/index.html', '/');
page('/', showHomeView);
page('/dashboard', showDashboardView);
page('/details/:id', showDetailsView);
page('/details/:id/edit', showEditView);
page('/create', showCreateView);
page('/search', showSearchView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutAction);

page.start();

async function logoutAction(ctx) {
    await logout();
    ctx.goTo('/');
}
