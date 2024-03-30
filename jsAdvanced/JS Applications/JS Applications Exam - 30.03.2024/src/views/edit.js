import { editPunk, getPunkById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify } from './notification.js';

const editTemplate = (punk, onEdit) => html`
    <section id="edit">
        <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="item" id="item" placeholder="Item" .value=${punk.item} />
                <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" .value=${punk.imageUrl} />
                <input type="text" name="price" id="price" placeholder="Price in Euro" .value=${punk.price} />
                <input
                    type="text"
                    name="availability"
                    id="availability"
                    placeholder="Availability Information"
                    .value=${punk.availability}
                />
                <input type="text" name="type" id="type" placeholder="Item Type" .value=${punk.type} />
                <textarea
                    id="description"
                    name="description"
                    placeholder="More About The Item"
                    rows="10"
                    cols="50"
                    .value=${punk.description}
                ></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export async function showEditView(ctx) {
    const id = ctx.params.id;

    const punk = await getPunkById(id);

    ctx.render(editTemplate(punk, createSubmitHandler(onEdit)));

    async function onEdit({ item, imageUrl, price, availability, type, description }, form) {
        if ([item, imageUrl, price, availability, type, description].some((f) => f === '')) {
            notify('All fields are required.');
            return;
        }

        try {
            await editPunk(id, { item, imageUrl, price, availability, type, description });
            form.reset();
            ctx.goTo(`/details/${id}`);
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
