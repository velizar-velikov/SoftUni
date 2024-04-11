import { DonationService } from '../data/donations.js';
import { Post, PostService } from '../data/posts.js';
import { html } from '../lib/lib.js';

const postService = new PostService();
const donationService = new DonationService();

const detailsTemplate = (
    post: Post,
    isOwner: boolean,
    canDonate: boolean,
    donationsCount: number,
    onDelete: Function,
    onDonate: Function
) => html`
    <section id="details-page">
        <h1 class="title">Post Details</h1>

        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src=${post.imageUrl} alt="Material Image" class="post-image" />
                </div>
                <div class="info">
                    <h2 class="title post-title">${post.title}</h2>
                    <p class="post-description">Description: ${post.description}</p>
                    <p class="post-address">Address: ${post.address}</p>
                    <p class="post-number">Phone number: ${post.phone}</p>
                    <p class="donate-Item">Donate Materials: ${donationsCount}</p>

                    ${isOwner
                        ? html` <div class="btns">
                              <a href="/details/${post._id}/edit" class="edit-btn btn">Edit</a>
                              <a href="javascript:void(0)" class="delete-btn btn" @click=${onDelete}>Delete</a>
                          </div>`
                        : canDonate
                        ? html` <div class="btns">
                              <a href="javascript:void(0)" class="donate-btn btn" @click=${onDonate}>Donate</a>
                          </div>`
                        : null}
                </div>
            </div>
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const post = await postService.getById(id);

    const isOwner = ctx.user?._id === post._ownerId;
    let canDonate = ctx.user && !isOwner && !(await donationService.hasUserDonatedForPost(id, ctx.user._id));
    let donationsCount = await donationService.getTotalDonationsForPost(id);

    update();

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');

        if (choice) {
            await postService.deletePost(id);
            ctx.goTo('/dashboard');
        }
    }

    async function onDonate() {
        await donationService.makeDonation({ postId: id });
        donationsCount++;
        canDonate = false;
        update();
    }

    function update() {
        ctx.render(detailsTemplate(post, isOwner, canDonate, donationsCount, onDelete, onDonate));
    }
}
