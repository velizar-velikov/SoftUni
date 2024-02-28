import { deleteRecipe } from "../delete.js";
import { edit } from "../edit.js";
import { e } from "./dom.js";
import { getRecipeById } from "./getRecipes.js";


export function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {

    const buttons = e('div', { className: 'controls' },
        e('button', { className: 'editBtn', onClick: (ev) => edit(ev, recipe) }, `&#128394 Edit`),
        e('button', { className: 'deleteBtn', onClick: (ev) => deleteRecipe(ev, recipe._id) }, `&#x274c; Delete`)
    );

    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        )
    );

    if (sessionStorage.getItem('userId') == recipe._ownerId) {
        result.appendChild(buttons);
    }

    return result;
}