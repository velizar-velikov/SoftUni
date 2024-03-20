import { deleteFruit, getFruitById } from '../data/fruits.js';
import { html } from '../lib/lib.js';
import { getUserId } from '../utils/userHelper.js';

const detailsTemplate = (fruit, isOwner, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${fruit.imageUrl} alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>${fruit.description}</p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">${fruit.nutrition}</p>
                </div>

                ${isOwner
                    ? html` <div id="action-buttons">
                          <a href="/details/${fruit._id}/edit" id="edit-btn">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                      </div>`
                    : null}
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const fruit = await getFruitById(id);

    const isOwner = getUserId() === fruit._ownerId;

    ctx.render(detailsTemplate(fruit, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this fruit?');

        if (choice) {
            await deleteFruit(id);
            ctx.goTo('/dashboard');
        }
    }
}
