import { deleteMeme, getMemeById } from '../data/memes.js';
import { html } from '../lib/lib.js';
import { getUserId } from '../utils/userHelper.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl} />
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme.description}</p>

                ${isOwner
                    ? html` <a class="button warning" href="/details/${meme._id}/edit">Edit</a>
                          <button class="button danger" @click=${onDelete}>Delete</button>`
                    : null}
            </div>
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const meme = await getMemeById(id);
    const isOwner = meme._ownerId === getUserId();

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this meme?');

        if (confirmed) {
            await deleteMeme(id);
            ctx.goTo('/dashboard');
        }
    }
}
