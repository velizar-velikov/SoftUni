import { getAllMotorcycles } from '../data/data.js';
import { html } from '../lib/lib.js';

const dashboardTemplate = (motorcycles) => html`
    <h2>Available Motorcycles</h2>

    <section id="dashboard">
        ${motorcycles.length > 0
            ? html`${motorcycles.map(motorcycleTemplate)}</section>`
            : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
    </section>
`;

const motorcycleTemplate = (motorcycle) => html`
    <div class="motorcycle">
        <img src=${motorcycle.imageUrl} alt="example1" />
        <h3 class="model">${motorcycle.model}</h3>
        <p class="year">Year: ${motorcycle.year}</p>
        <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
        <p class="contact">Contact Number: ${motorcycle.contact}</p>
        <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
    </div>
`;
export async function showDashboardView(ctx) {
    const motorcycles = await getAllMotorcycles();

    ctx.render(dashboardTemplate(motorcycles));
}
