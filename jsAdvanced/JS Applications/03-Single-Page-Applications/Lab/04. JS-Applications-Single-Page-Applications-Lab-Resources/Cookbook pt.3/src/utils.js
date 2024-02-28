import { get } from "./data/api.js";
import { createRecipePreview } from "./data/createRecipe.js";
import { getRecipes } from "./data/getRecipes.js";

export function showSection(id) {
    document.getElementById('loading').style.display = 'none';
    [...document.querySelectorAll('section')].forEach(section => section.style.display = 'none');
    const section = document.getElementById(id);
    section.style.display = 'block';
}


export async function logout() {
    await get('users/logout');
    sessionStorage.removeItem('authToken');
    showHome();

}

export let myLinks;
export async function showHome(links) {
    myLinks = links;

    showNav();

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';
    cards.forEach(card => recipesSection.appendChild(card));

    //showing the right section through display property
    links['/recipes']('recipes');
}


function showNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}