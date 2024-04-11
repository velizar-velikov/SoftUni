import { html } from '../lib/lib.js';
import postService from '../data/posts.js';
import { Post } from '../types/post.js';

const dashboardTemplate = (posts: Post[]) => html`
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>

        <div class="all-posts">${posts.length > 0 ? html` ${posts.map(postTemplate)}` : null}</div>

        ${posts.length === 0 ? html` <h1 class="title no-posts-title">No posts yet!</h1>` : null}
    </section>
`;

const postTemplate = (post: Post) => html`
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src=${post.imageUrl} alt="Material Image" />
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;

export async function showDashboard(ctx) {
    const posts: Post[] = await postService.getAll();

    ctx.render(dashboardTemplate(posts));
}
