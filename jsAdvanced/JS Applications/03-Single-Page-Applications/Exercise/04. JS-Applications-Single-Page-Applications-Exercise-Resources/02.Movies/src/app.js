import { logout, showSection } from "./util.js";
import { showHome } from "./views/home.js";
import { login } from "./views/login.js";
import { register } from "./views/register.js";


showHome();

const links = {
    '/': showHome,
    '/login': showSection.bind(null, 'form-login'),
    '/register': showSection.bind(null, 'form-sign-up'),
    '/logout': logout
}


document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('register-form').addEventListener('submit', register);

document.querySelectorAll('nav a').forEach(link => {
    if (link.id == 'welcome-msg') {
        return;
    }
    link.addEventListener('click', onNavigate);
})

function onNavigate(event) {
    event.preventDefault();

    const path = event.target.pathname;
    links[path]();
}