import { deleteTattoo, getLikesForTattoo, getTattooById, hasUserLikedThisTattoo, likeTattoo } from '../data/tattoosData.js';
import { html } from '../lib/lib.js';

const detailsTemplate = (tattoo, isOwner, tattooLikes, canLike, onDelete, onLike) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${tattoo.imageUrl}" alt="example1" />
            <div>
                <div id="info-wrapper">
                    <p id="details-type">${tattoo.type}</p>
                    <div id="details-description">
                        <p id="user-type">${tattoo.userType}</p>
                        <p id="description">${tattoo.description}</p>
                    </div>
                    <h3>Like tattoo:<span id="like">${tattooLikes}</span></h3>
                    <!--Edit and Delete are only for creator-->

                    ${isOwner
                        ? html`
                              <div id="action-buttons">
                                  <a href="/details/${tattoo._id}/edit" id="edit-btn">Edit</a>
                                  <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                              </div>
                          `
                        : canLike
                        ? html`
                              <!--Bonus - Only for logged-in users ( not authors )-->
                              <div id="action-buttons">
                                  <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
                              </div>
                          `
                        : ''}
                </div>
            </div>
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const tattoo = await getTattooById(id);
    const isOwner = tattoo._ownerId == ctx.user?._id;
    const tattooLikes = await getLikesForTattoo(id);

    const canLike = !isOwner && ctx.user?._id && !(await hasUserLikedThisTattoo(id));

    ctx.render(detailsTemplate(tattoo, isOwner, tattooLikes, canLike, onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');

        if (choice) {
            await deleteTattoo(id);
            ctx.goTo('/dashboard');
        }
    }

    async function onLike() {
        await likeTattoo(id);
        ctx.goTo(`/details/${id}`);
    }
}

// html`
//                               <!--Bonus - Only for logged-in users ( not authors )-->
//                               <div id="action-buttons">
//                                   <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
//                               </div>
//                           `
