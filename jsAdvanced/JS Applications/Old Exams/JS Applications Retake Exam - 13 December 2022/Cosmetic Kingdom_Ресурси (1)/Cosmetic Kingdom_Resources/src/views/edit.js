import { editProduct, getProductById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const editTemplate = (product, onEdit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Product</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="name" id="name" placeholder="Product Name" .value=${product.name} />
                <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value=${product.imageUrl} />
                <input type="text" name="category" id="product-category" placeholder="Category" .value=${product.category} />
                <textarea
                    id="product-description"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    cols="50"
                    .value=${product.description}
                ></textarea>

                <input type="text" name="price" id="product-price" placeholder="Price" .value=${product.price} />
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export async function showEditView(ctx) {
    const id = ctx.params.id;

    const product = await getProductById(id);

    ctx.render(editTemplate(product, createSubmitHandler(onEdit)));

    async function onEdit({ name, imageUrl, category, description, price }, form) {
        if ([name, imageUrl, category, description, price].some((f) => f === '')) {
            return alert('All fields are required.');
        }

        await editProduct(id, { name, imageUrl, category, description, price });
        form.reset();
        ctx.goTo(`/details/${id}`);
    }
}
