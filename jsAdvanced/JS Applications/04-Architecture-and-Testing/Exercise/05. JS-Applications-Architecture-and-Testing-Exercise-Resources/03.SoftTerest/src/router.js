import { onLogout } from './utils.js';

export function initialize(routes) {

    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        goTo,
        showSection,
        updateNav,
    };

    function showSection(section) {
        document.getElementById('root').replaceChildren(section);
    }

    function onNavigate(event) {
        const target = event.target;

        if (target.tagName == 'A') {
            event.preventDefault();

            const url = new URL(target.href);

            goTo(url.pathname);

            if (url.pathname == '/logout') {
                onLogout();
            }
        }
    }

    function goTo(name) {

        const handler = routes[name];
        if (typeof handler == 'function') {
            handler(context);
        }
    }

    function updateNav() {
        const user = localStorage.getItem('user');

        if (user) {
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'block');

        }
    }

    return context;
}