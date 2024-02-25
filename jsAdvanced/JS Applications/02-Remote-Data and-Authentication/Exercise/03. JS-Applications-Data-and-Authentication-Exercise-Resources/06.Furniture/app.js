import { showAllOrders } from "./src/api/allOrders.js";
import { get } from "./src/api/api.js";
import { loadFurniture } from "./src/api/loadFurniture.js";
import { buyProducts } from "./src/views/buy.js";
import { createRecipe } from "./src/views/create.js";

await loadFurniture(null, true);

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);

async function logout() {
    await get('users/logout');
    sessionStorage.removeItem('user');
    location.href = './home.html';
}

const formElement = document.querySelector('form');
formElement.addEventListener('submit', createRecipe);

const orders = document.querySelector('.orders span');
orders.textContent = '';

const totalPrice = document.querySelectorAll('.orders span')[1];
totalPrice.textContent = '';

const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click', buyProducts);

const userId = JSON.parse(sessionStorage.getItem('user'))._id;

const allOrdersBtn = document.getElementById('allOrdersBtn');
allOrdersBtn.addEventListener('click', () => showAllOrders(userId));
