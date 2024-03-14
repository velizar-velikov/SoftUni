import { getAllFurniture } from '../data/data.js';
import { html } from '../lib.js';
import { changeNavLinkColour } from '../utils.js';

const dashboardTemplate = (allFurniture) => html`
    <section id="dashboard">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Welcome to Furniture System</h1>
                    <p>Select furniture from the catalog to view details.</p>
                </div>
            </div>
            <div class="row space-top">${allFurniture.map(furnitureCardTemplate)}</div>
        </div>
    </section>
`;

const furnitureCardTemplate = (singleFurniture) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${singleFurniture.img} />
                <p>${singleFurniture.description}</p>
                <footer>
                    <p>Price: <span>${singleFurniture.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${singleFurniture._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

export async function showDashboardPage(ctx) {
    const allFurniture = await getAllFurniture();

    ctx.render(dashboardTemplate(allFurniture));
    changeNavLinkColour('catalogLink');
}
