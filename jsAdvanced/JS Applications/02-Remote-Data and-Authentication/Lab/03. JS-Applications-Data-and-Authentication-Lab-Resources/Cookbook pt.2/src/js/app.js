import { showNavBar } from "./utils.js";
import { logout } from "./views/logout.js";
import { loadAllRecipes } from "./utils.js";

window.addEventListener('load', loadAllRecipes);

showNavBar();

document.querySelector('.active').addEventListener('click', loadAllRecipes);
document.getElementById('logoutBtn').addEventListener('click', logout);