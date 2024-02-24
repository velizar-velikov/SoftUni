import { post } from "../api/api.js";

const formElement = document.querySelector('form');
formElement.addEventListener('submit', createRecipe);

async function createRecipe(e) {
    e.preventDefault();

    const formData = new FormData(formElement);

    let { name, img, ingredients, steps } = Object.fromEntries(formData.entries());

    if (name == '' || img == '' || ingredients == '' || steps == '') {
        alert('All fields are required!');
        return;
    }

    ingredients = ingredients.trim().split('\n');
    steps = steps.trim().split('\n');
    const response = await post('data/recipes', { img, ingredients, name, steps });

    location.href = '../../index.html';
}