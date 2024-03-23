import { editMeme, getMemeById } from '../data/memes.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { notify, removeBorders } from './notifications.js';

const editTemplate = (meme, onEdit) => html`
    <section id="edit-meme">
        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
                <label for="description">Description</label>
                <textarea
                    id="description"
                    placeholder="Enter Description"
                    name="description"
                    .value=${meme.description}
                ></textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl} />
                <input type="submit" class="registerbtn button" value="Edit Meme" />
            </div>
        </form>
    </section>
`;

export async function showEditPage(ctx) {
    const id = ctx.params.id;

    const meme = await getMemeById(id);

    ctx.render(editTemplate(meme, createSubmitHandler(onEdit)));

    async function onEdit({ title, description, imageUrl }, form) {
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
            await editMeme(id, { title, description, imageUrl });
            form.reset();
            ctx.goTo(`/details/${id}`);
        } catch (error) {
            notify(error.message);
            error.handled = true;
        }
    }
}
