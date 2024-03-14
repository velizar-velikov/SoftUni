import { getMyFurniture } from '../data/data.js';
import { html } from '../lib.js';
import { changeNavLinkColour } from '../utils/navHelper.js';
import { getUserData } from '../utils/userHelper.js';

const myDashboardTemplate = (myFurniture) => html`
    <section id="my-dashboard">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>My Furniture</h1>
                    <p>This is a list of your publications.</p>
                </div>
            </div>
            ${myFurniture.map(singleFurnitureTemplate)}
            </div>
        </div>
    </section>
`;

const singleFurnitureTemplate = (singleFurniture) => html`
    <div class="row space-top">
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
    </div>
`;
export async function showMyDashboardPage(ctx) {
    const myFurniture = await getMyFurniture(getUserData()._id);

    ctx.render(myDashboardTemplate(myFurniture));
    changeNavLinkColour('profileLink');
}
