import { createProduct } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="form">
            <h2>Add Product</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="name" id="name" placeholder="Product Name" />
                <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                <input type="text" name="category" id="product-category" placeholder="Category" />
                <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                <input type="text" name="price" id="product-price" placeholder="Price" />

                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function showCreateView(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    /**
     * @param {import('../data/data.js').Product} param0
     * @param {HTMLFormElement} form
     * @returns {void}
     */
    async function onCreate({ name, imageUrl, category, description, price }, form) {
        if ([name, imageUrl, category, description, price].some((f) => f === '')) {
            return alert('All fields are required.');
        }

        await createProduct({ name, imageUrl, category, description, price });
        form.reset();
        ctx.goTo('/dashboard');
    }
}
