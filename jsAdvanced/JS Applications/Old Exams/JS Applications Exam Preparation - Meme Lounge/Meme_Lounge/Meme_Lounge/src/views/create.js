import { createMeme } from '../data/memes.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify, removeBorders } from './notifications.js';

const createTemplate = (onCreate) => html`
    <section id="create-meme">
        <form id="create-form" @submit=${onCreate}>
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" />
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                <input type="submit" class="registerbtn button" value="Create Meme" />
            </div>
        </form>
    </section>
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ title, description, imageUrl }, form) {
        removeBorders(form);

        if (!title) {
            form.querySelector('#title').style.border = '2px solid red';
        }
        if (!description) {
            form.querySelector('#description').style.border = '2px solid red';
        }
        if (!imageUrl) {
            form.querySelector('#imageUrl').style.border = '2px solid red';
        }

        if (!title || !description || !imageUrl) {
            notify('All fields are required');
            return;
        }

        try {
            await createMeme({ title, description, imageUrl });
            form.reset();
            ctx.goTo('/dashboard');
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
