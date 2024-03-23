import { getUserMemes } from '../data/memes.js';
import { html } from '../lib/lib.js';

const userDashboardTemplate = (memes, user) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img
                id="user-avatar-url"
                alt="user-profile"
                src=${user.gender === 'female' ? '/images/female.png' : '/images/male.png'}
            />
            <div class="user-content">
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            ${memes.length > 0 ? html`${memes.map(userMemeTemplate)}` : html` <p class="no-memes">No memes in database.</p>`}
        </div>
    </section>
`;

const userMemeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
`;

export async function showUserDashboard(ctx) {
    const memes = await getUserMemes(ctx.user._id);
    console.log(memes);

    ctx.render(userDashboardTemplate(memes, ctx.user));
}
