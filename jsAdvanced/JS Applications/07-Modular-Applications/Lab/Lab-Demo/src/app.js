import { page } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { notify } from './notification.js';
import { showCreate } from './views/create.js';
import './data/users.js';

window.notify = notify;

page('/index.html', '/');
page('/', showCatalog);
page('/create', showCreate);

page.start();
