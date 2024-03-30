import { getAllPunks } from '../data/data.js';
import { html } from '../lib/lib.js';

const dashboardTemplate = (punks) => html`
    <h3 class="heading">Market</h3>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${punks.length > 0 ? html` ${punks.map(punkTemplate)}` : null}
    </section>
    <!-- Display an h2 if there are no posts -->
    ${punks.length > 0 ? null : html`<h3 class="empty">No Items Yet</h3>`}
`;

const punkTemplate = (punk) => html`
    <div class="item">
        <img src=${punk.imageUrl} alt="example1" />
        <h3 class="model">${punk.item}</h3>
        <div class="item-info">
            <p class="price">Price: €${punk.price}</p>
            <p class="availability">${punk.availability}</p>
            <p class="type">Type: ${punk.type}</p>
        </div>
        <a class="details-btn" href="/details/${punk._id}">Uncover More</a>
    </div>
`;

export async function showDashboardView(ctx) {
    const punks = await getAllPunks();

    ctx.render(dashboardTemplate(punks));
}
