import { getAllProducts } from '../data/data.js';
import { html } from '../lib/lib.js';

const dashboardTemplate = (products) => html`
    <h2>Products</h2>
    <section id="dashboard">
        ${products.length > 0 ? html` ${products.map(productTemplate)}` : html`<h2>No products yet.</h2>`}
    </section>
`;

const productTemplate = (product) => html`
    <div class="product">
        <img src=${product.imageUrl} alt="example1" />
        <p class="title">${product.name}</p>
        <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
        <a class="details-btn" href="/details/${product._id}">Details</a>
    </div>
`;

export async function showDashboardView(ctx) {
    const products = await getAllProducts();
    ctx.render(dashboardTemplate(products));
}
