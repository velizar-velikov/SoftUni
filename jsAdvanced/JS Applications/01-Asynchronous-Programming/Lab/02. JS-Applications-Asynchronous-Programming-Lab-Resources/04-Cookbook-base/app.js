const host = 'http://localhost:3030/jsonstore/cookbook/';

window.addEventListener('load', loadAllRecipes);

async function loadAllRecipes() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const recipesData = await get(`${host}recipes`);
    for (let recipeData of Object.values(recipesData)) {
        renderRecipePreview(recipeData, main);
    }
}


function renderRecipePreview(recipeData, main) {

    const article = document.createElement('article');
    article.className = 'preview';
    article.innerHTML = `
    <div class="title">
        <h2>${recipeData.name}</h2>
    </div>
    <div class="small">
        <img src="${recipeData.img}">
    </div>`;

    article.addEventListener('click', () => loadRecipe(recipeData._id));
    main.appendChild(article);
}


async function loadRecipe(id) {
    const recipeData = await get(`${host}details/${id}`);
    renderFullRecipe(recipeData);
}


function renderFullRecipe(recipeData) {
    const article = document.createElement('article');

    article.innerHTML = `
    <h2>${recipeData.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${recipeData.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipeData.ingredients
            .map(ingr => `<li>${ingr}</li>`)
            .join('\n')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipeData.steps
            .map(step => `<p>${step}</p>`)
            .join('')}
    </div>`;

    document.querySelector('main').replaceChildren(article);
}


async function get(url) {
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const err = await response.json();
            throw err;
        }
        const data = await response.json();
        return data;

    } catch (err) {
        alert(`Error: ${err.message}`);
    }
}