import postService from '../data/posts.js';
import { html } from '../lib/lib.js';
import { Post } from '../types/post.js';


const myDashboardTemplate = (posts: Post[]) => html`
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>

        <div class="my-posts">${posts.length > 0 ? html`${posts.map(postTemplate)}` : null}</div>

        ${posts.length === 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` : null}
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

export async function showMyDashboard(ctx) {
    const posts: Post[] = await postService.getPostsByUser(ctx.user._id);

    ctx.render(myDashboardTemplate(posts));
}
