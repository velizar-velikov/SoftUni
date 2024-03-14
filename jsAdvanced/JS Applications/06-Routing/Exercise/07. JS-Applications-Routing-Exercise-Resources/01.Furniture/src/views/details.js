import { deleteFurniture, getFurnitureById } from '../data/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils/userHelper.js';

const detailsTemplate = (singleFurniture, onDelete) => html`
    <section id="details">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Furniture Details</h1>
                </div>
            </div>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src=${singleFurniture.img} />
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p>Make: <span>${singleFurniture.make}</span></p>
                    <p>Model: <span>${singleFurniture.model}</span></p>
                    <p>Year: <span>${singleFurniture.year}</span></p>
                    <p>Description: <span>${singleFurniture.description}</span></p>
                    <p>Price: <span>${singleFurniture.price}</span></p>
                    <p>Material: <span>${singleFurniture.material}</span></p>

                    ${singleFurniture.isOwner
                        ? html` <div>
                              <a href="/details/${singleFurniture._id}/edit" class="btn btn-info">Edit</a>
                              <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
                          </div>`
                        : null}
                </div>
            </div>
        </div>
    </section>
`;

export async function showDetailsPage(ctx) {
    const id = ctx.params.id;

    const singleFurniture = await getFurnitureById(id);

    if (singleFurniture.img.startsWith('./')) {
        singleFurniture.img = singleFurniture.img.slice(1);
    }
    singleFurniture.isOwner = singleFurniture._ownerId === getUserData()?._id;
    ctx.render(detailsTemplate(singleFurniture, onDelete));

    async function onDelete() {
        const choice = window.confirm('Are you sure you want to delete this item?');

        if (choice === true) {
            await deleteFurniture(id);
            ctx.page.redirect('/dashboard');
        }
    }
}
