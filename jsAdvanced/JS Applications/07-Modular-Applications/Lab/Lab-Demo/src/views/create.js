import { post } from '../data/api.js';
import { classMap, render, page, html } from '../lib.js';
import { notify } from '../notification.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = ({ name, img, ingredients, steps }, errors, onCreate) => html`
    <h1>Create Recipe</h1>
    <form @submit=${onCreate}>
        <label>
            Name:${errorMsg(errors.name)}
            <input class=${classMap({ error: !!errors.name })} type="text" name="name" .value=${name || ''} />
        </label>
        <label>
            Image URL:${errorMsg(errors.img)}
            <input class=${classMap({ error: !!errors.img })} type="text" name="img" .value=${img || ''} />
        </label>
        <label>
            Ingredients:${errorMsg(errors.ingredients)}
            <textarea
                class=${classMap({ error: !!errors.ingredients })}
                name="ingredients"
                .value=${ingredients?.join('\n') || ''}
            ></textarea>
        </label>
        <label>
            Steps:${errorMsg(errors.steps)}
            <textarea class=${classMap({ error: !!errors.steps })} name="steps" .value=${steps?.join('\n') || ''}></textarea>
        </label>
        <button type="submit">Create Recipe</button>
    </form>
`;

const errorMsg = (error) => (!error ? null : html` <span class="error">${error}</span> `);

export function showCreate(ctx) {
    update();
}

function update(data = {}, errors = {}) {
    render(createTemplate(data, errors, createSubmitHandler(onCreate)));
}

async function onCreate({ name, img, ingredients, steps }, form) {
    ingredients = ingredients.split('\n').filter((l) => !!l);
    steps = steps.split('\n').filter((l) => !!l);

    const errors = {};
    let valid = true;

    if (!name) {
        errors.name = 'Name is required';
        valid = false;
    }
    if (!img) {
        errors.img = 'Image URL is required';
        valid = false;
    }
    if (ingredients.length == 0) {
        errors.ingredients = 'Ingredients list must not be empty';
        valid = false;
    }
    if (steps.length == 0) {
        errors.steps = 'Steps list must not be empty';
        valid = false;
    }

    update({ name, img, ingredients, steps }, errors);

    if (!valid) {
        return;
    }

    //Disable form
    const inputs = [...form.querySelectorAll('input, textarea, button')];
    inputs.forEach((i) => (i.disabled = true));

    try {
        const result = await createRecipe(name, img, ingredients, steps);
        page.redirect('/');
    } catch (error) {
        notify(error.message, 'error');
        error.handled = true;
    }

    //Enable form
    inputs.forEach((i) => (i.disabled = false));
}

export async function createRecipe(name, img, ingredients, steps) {
    return post('http://localhost:3030/data/recipes', { name, img, ingredients, steps });
}
