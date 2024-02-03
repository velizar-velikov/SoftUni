import { getAllIdeas } from "../api/data.js";

const section = document.getElementById('dashboard-holder');

export async function showCatalog(context) {
    context.showSection(section);

    const ideas = await getAllIdeas();

    section.replaceChildren(...ideas.map(createIdeaPreview));
}

function createIdeaPreview(idea) {
    const div = document.createElement('div');
    div.classList.add('card overflow-hidden current-card details');
    div.style.width = '20rem';
    div.style.height = '18rem';

    div.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.image}" alt="Card image cap">
    <a class="btn" href="">Details</a>`;

    return div;
}