import { createPunk } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify } from './notification.js';

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="form form-item">
            <h2>Share Your item</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="item" id="item" placeholder="Item" />
                <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
                <input type="text" name="price" id="price" placeholder="Price in Euro" />
                <input type="text" name="availability" id="availability" placeholder="Availability Information" />
                <input type="text" name="type" id="type" placeholder="Item Type" />
                <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50"></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function showCreateView(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ item, imageUrl, price, availability, type, description }, form) {
        if ([item, imageUrl, price, availability, type, description].some((f) => f === '')) {
            notify('All fields are required.');
            return;
        }

        try {
            await createPunk({ item, imageUrl, price, availability, type, description });
            form.reset();
            ctx.goTo('/dashboard');
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
