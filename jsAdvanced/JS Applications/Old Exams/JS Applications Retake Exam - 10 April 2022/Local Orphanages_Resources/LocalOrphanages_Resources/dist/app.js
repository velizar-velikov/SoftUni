import { page } from './lib/lib.js';
import { addGoTo } from './middlewares/redirect.js';
import { renderer } from './middlewares/render.js';
import { UserService } from './data/users.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showMyDashboard } from './views/my-dashboard.js';
import { showDetails } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { session } from './middlewares/session.js';
const root = document.getElementById('box');
const userService = new UserService();
// middlewares
page(renderer(root));
page(addGoTo());
page('/index.html', '/dashboard');
page('/', '/dashboard');
page('/dashboard', showDashboard);
page('/my-dashboard', session(), showMyDashboard);
page('/details/:id', session(), showDetails);
page('/details/:id/edit', showEditPage);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', logoutAction);
page.start();
console.log('works');
async function logoutAction(ctx) {
    await userService.logout();
    ctx.goTo('/');
}
