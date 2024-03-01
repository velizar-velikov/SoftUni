import { put } from "./data/api.js";
import { myLinks, showHome, showSection } from "./utils.js";

export async function edit(ev, recipe) {
    ev.preventDefault();
    showSection('edit');


    //form inputs selection
    const nameElement = document.querySelector('#edit input[name="name"]');
    const imgElement = document.querySelector('#edit input[name="img"]');
    const ingredientsElement = document.querySelector('#edit textarea[name="ingredients"]');
    const stepsElement = document.querySelector('#edit textarea[name="steps"]');

    //loadingData for editing
    nameElement.value = recipe.name;
    imgElement.value = recipe.img;
    ingredientsElement.value = recipe.ingredients.join('\n');
    stepsElement.value = recipe.steps.join('\n');

    document.getElementById('editForm').addEventListener('submit', update);

    async function update(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { name, img, ingredients, steps } = Object.fromEntries(formData.entries());

        if (name == '' || img == '' || ingredients == '' || steps == '') {
            alert('All fields are required!');
            return;
        }

        const bodyData = {
            name: name,
            img: img,
            ingredients: ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        await put(`data/recipes/${recipe._id}`, bodyData);

        showHome(myLinks);
        ev.target.reset();
    }
}