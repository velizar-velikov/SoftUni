import { html } from '../lib/lib.js';
import { Post } from '../types/post.js';
import postService from '../data/posts.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const createTemplate = (onCreate: Function) => html`
    <section id="create-page" class="auth">
        <form id="create" @submit=${onCreate}>
            <h1 class="title">Create Post</h1>

            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" />
            </article>

            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" />
            </article>

            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" />
            </article>

            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" />
            </article>

            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" />
            </article>

            <input type="submit" class="btn submit" value="Create Post" />
        </form>
    </section>
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ title, description, imageUrl, address, phone }: Post, form: HTMLFormElement) {
        if ([title, description, imageUrl, address, phone].some((f: string) => f === '')) {
            return alert('All fields are required!');
        }

        await postService.addPost({ title, description, imageUrl, address, phone });
        form.reset();
        ctx.goTo('/dashboard');
    }
}
