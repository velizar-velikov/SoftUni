import { addTattoo } from '../data/tattoosData.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/submitHandler.js';

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="form">
            <h2>Add tattoo</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="type" id="type" placeholder="Tattoo Type" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                <select id="user-type" name="user-type">
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">First Time in Tattoo</option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Add tattoo</button>
            </form>
        </div>
    </section>
`;

export async function showAddPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ type, 'image-url': imageUrl, description, 'user-type': userType }, form) {
        if (type == '' || imageUrl == '' || description == '' || userType == '') {
            return alert('All fields are required!');
        }

        await addTattoo({ type, imageUrl, description, userType });
        form.reset();
        ctx.goTo('/dashboard');
    }
}
