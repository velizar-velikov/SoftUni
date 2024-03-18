import { get } from './api.js';

const host = 'http://localhost:3030';

const pageSize = 5;

const endpoints = {
    recipes: '/data/recipes',
};
export async function getRecipes(search, page) {
    let url = host + endpoints.recipes;
    const countUrl = host + endpoints.recipes + '?count';

    if (search) {
        url += '?where=' + encodeURIComponent(`name LIKE "${search}"`);
    } else if (page) {
        url += `?offset=${(page - 1) * pageSize}&pageSize=${pageSize}`;
    }

    const [recipes, count] = await Promise.all([get(url), get(countUrl)]);

    return {
        recipes,
        pages: Math.ceil(count / pageSize),
    };
}
