import { get } from './api.js';

export async function getRecipes() {
    return Object.values(await get('data/recipes'));
}

export async function getRecipeById(id) {
    return await get('data/recipes/' + id);
}