import { editMotorcycle, getMotorcycleById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const editTemplate = (motorcycle, onEdit) => html`
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
            <h2>Edit Motorcycle</h2>
            <form @submit=${onEdit} class="edit-form">
                <input type="text" name="model" id="model" placeholder="Model" .value=${motorcycle.model} />
                <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" .value=${motorcycle.imageUrl} />
                <input type="number" name="year" id="year" placeholder="Year" .value=${motorcycle.year} />
                <input type="number" name="mileage" id="mileage" placeholder="mileage" .value=${motorcycle.mileage} />
                <input type="number" name="contact" id="contact" placeholder="contact" .value=${motorcycle.contact} />
                <textarea id="about" name="about" placeholder="about" rows="10" cols="50" .value=${motorcycle.about}></textarea>
                <button type="submit">Edit Motorcycle</button>
            </form>
        </div>
    </section>
`;

export async function showEditView(ctx) {
    const id = ctx.params.id;

    const motorcycle = await getMotorcycleById(id);

    ctx.render(editTemplate(motorcycle, createSubmitHandler(onEdit)));

    async function onEdit({ model, imageUrl, year, mileage, contact, about }) {
        if ([model, imageUrl, year, mileage, contact, about].some((f) => f === '')) {
            return alert('All fields are required.');
        }

        await editMotorcycle(id, { model, imageUrl, year, mileage, contact, about });

        ctx.goTo(`/details/${id}`);
    }
}
