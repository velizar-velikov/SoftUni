import { showAllOrders } from "./src/api/allOrders.js";
import { loadFurniture } from "./src/api/loadFurniture.js";
import { buyProducts } from "./src/views/buy.js";
import { createRecipe } from "./src/views/create.js";
import { logout } from "./src/views/logout.js";

await loadFurniture(null, true);

document.getElementById('logoutBtn').addEventListener('click', logout);
document.querySelector('form').addEventListener('submit', createRecipe);
document.querySelector('.orders span').textContent = '';
document.querySelectorAll('.orders span')[1].textContent = '';
document.getElementById('buyBtn').addEventListener('click', buyProducts);

const userId = JSON.parse(sessionStorage.getItem('user'))._id;
document.getElementById('allOrdersBtn').addEventListener('click', () => showAllOrders(userId));