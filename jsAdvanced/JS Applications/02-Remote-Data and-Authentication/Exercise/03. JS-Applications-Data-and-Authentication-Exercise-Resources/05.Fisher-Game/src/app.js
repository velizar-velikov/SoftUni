import { addCatch } from "./js/data/addCatch.js";
import { loadAllCatches } from "./js/data/loadCatches.js";
import { disableOrEnableAddingCatch, showNav } from "./js/utils.js";
import { logout } from "./js/views/logout.js";

showNav('home');

document.getElementById('logout').addEventListener('click', logout);

document.getElementById('catches').innerHTML = '';
document.querySelector('button.add').addEventListener('click', addCatch);

disableOrEnableAddingCatch();

const loadBtn = document.querySelector('.load');
loadBtn.disabled = false;
loadBtn.addEventListener('click', loadAllCatches);