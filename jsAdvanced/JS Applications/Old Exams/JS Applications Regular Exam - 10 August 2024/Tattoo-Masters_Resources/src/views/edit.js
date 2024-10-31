import { editTattoo, getTattooById } from '../data/tattoosData.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/submitHandler.js';

const editTemplate = (tattoo, onEdit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit tattoo</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="type" id="type" placeholder="Tattoo Type" .value=${tattoo.type} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${tattoo.imageUrl} />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                    .value=${tattoo.description}
                ></textarea>
                <select id="user-type" name="user-type" .value=${tattoo.userType}>
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">First Time in Tattoo</option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export async function showEditPage(ctx) {
    const id = ctx.params.id;
    const tattoo = await getTattooById(id);

    ctx.render(editTemplate(tattoo, createSubmitHandler(onEdit)));

    async function onEdit({ type, 'image-url': imageUrl, description, 'user-type': userType }, form) {
        if (type == '' || imageUrl == '' || description == '' || userType == '') {
            return alert('All fields are required!');
        }

        const tattoo = await editTattoo(id, { type, imageUrl, description, userType });
        form.reset();
        ctx.goTo(`/details/${tattoo._id}`);
    }
}
