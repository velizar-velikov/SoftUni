import { deletePunk, getPunkById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { getUserId } from '../utils/userHelper.js';

const detailsTemplate = (punk, isOwner, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <div>
                <img id="details-img" src=${punk.imageUrl} alt="example1" />
                <p id="details-title">${punk.item}</p>
            </div>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="details-price">Price: €${punk.price}</p>
                    <p class="details-availability">${punk.availability}</p>
                    <p class="type">Type: ${punk.type}</p>
                    <p id="item-description">${punk.description}</p>
                </div>
                ${isOwner
                    ? html` <div id="action-buttons">
                          <a href="/details/${punk._id}/edit" id="edit-btn">Edit</a>
                          <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                      </div>`
                    : null}
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const punk = await getPunkById(id);
    const isOwner = getUserId() === punk._ownerId;
    ctx.render(detailsTemplate(punk, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');

        if (choice) {
            await deletePunk(id);
            ctx.goTo('/dashboard');
        }
    }
}
