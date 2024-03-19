import { deleteMotorcycle, getMotorcycleById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { getUserId } from '../utils/userHelper.js';

const detailsTemplate = (motorcycle, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${motorcycle.imageUrl} alt="example1" />
            <p id="details-title">${motorcycle.model}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="year">Year: ${motorcycle.year}</p>
                    <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
                    <p class="contact">Contact Number: ${motorcycle.contact}</p>
                    <p id="motorcycle-description">${motorcycle.about}</p>
                </div>

                ${motorcycle.isCreator
                    ? html` <div id="action-buttons">
                          <a href="/details/${motorcycle._id}/edit" id="edit-btn">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                      </div>`
                    : null}
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const motorcycle = await getMotorcycleById(id);
    motorcycle.isCreator = getUserId() === motorcycle._ownerId;

    ctx.render(detailsTemplate(motorcycle, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this motorcycle?');

        if (choice) {
            await deleteMotorcycle(id);
            ctx.goTo('/dashboard');
        }
    }
}
