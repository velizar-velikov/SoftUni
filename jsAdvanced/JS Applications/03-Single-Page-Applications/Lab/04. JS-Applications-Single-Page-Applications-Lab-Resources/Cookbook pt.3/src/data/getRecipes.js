import { get } from "./api.js";

export async function getRecipes() {
    const recipes = await get('data/recipes');

    return recipes;
}

export async function getRecipeById(id) {
    const recipe = await get(`data/recipes/${id}`);

    return recipe;
}