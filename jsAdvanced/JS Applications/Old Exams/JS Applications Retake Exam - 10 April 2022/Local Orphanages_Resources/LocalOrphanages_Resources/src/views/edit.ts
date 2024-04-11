import postService from '../data/posts.js';
import { html } from '../lib/lib.js';
import { Post } from '../types/post.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const editTemplate = (post: Post, onEdit: Function) => html`
    <section id="edit-page" class="auth">
        <form id="edit" @submit=${onEdit}>
            <h1 class="title">Edit Post</h1>

            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" .value=${post.title} />
            </article>

            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" .value=${post.description} />
            </article>

            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl} />
            </article>

            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" .value=${post.address} />
            </article>

            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" .value=${post.phone} />
            </article>

            <input type="submit" class="btn submit" value="Edit Post" />
        </form>
    </section>
`;

export async function showEditPage(ctx) {
    const id: string = ctx.params.id;

    const post: Post = await postService.getById(id);

    ctx.render(editTemplate(post, createSubmitHandler(onEdit)));

    async function onEdit({ title, description, imageUrl, address, phone }: Post, form: HTMLFormElement) {
        if ([title, description, imageUrl, address, phone].some((f: string) => f === '')) {
            return alert('All fields are required!');
        }

        await postService.editPost(id, { title, description, imageUrl, address, phone });
        form.reset();
        ctx.goTo(`/details/${id}`);
    }
}
