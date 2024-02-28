import { post } from "./data/api.js";

export async function create(ev) {
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

    const responseData = await post('data/recipes', bodyData);

    ev.target.reset();
}