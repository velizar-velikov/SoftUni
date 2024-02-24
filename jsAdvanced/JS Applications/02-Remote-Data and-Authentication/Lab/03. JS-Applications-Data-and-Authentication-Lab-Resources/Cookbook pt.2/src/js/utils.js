import { getRecipes, getRecipeById } from './api/data.js';
import { createRecipePreview } from './api/createRecipe.js';

export function showNavBar() {

    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');

    const user = sessionStorage.getItem('user');

    userNav.style.display = user ? 'inline-block' : 'none';
    guestNav.style.display = user ? 'none' : 'inline-block';
}

export async function loadAllRecipes() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
}