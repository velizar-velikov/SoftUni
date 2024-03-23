import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteFact, getAllLikesForPost, getFactById, hasUserLikedFact, likeFact } from '../data/data.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (fact, onDelete, onLike) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${fact.imageUrl} alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${fact.description}</p>
                    <p id="more-info">${fact.moreInfo}</p>
                </div>

                <h3>Likes:<span id="likes">${fact.likes}</span></h3>

                ${fact.isOwner
                    ? html` <!--Edit and Delete are only for creator-->
                          <div id="action-buttons">
                              <a href="/details/${fact._id}/edit" id="edit-btn">Edit</a>
                              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                          </div>`
                    : fact.canLike
                    ? html` <div id="action-buttons">
                          <!--Bonus - Only for logged-in users ( not authors )-->
                          <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
                      </div>`
                    : null}
            </div>
        </div>
    </section>
`;

export async function showDetailsPage(ctx) {
    const id = ctx.params.id;

    const fact = await getFactById(id);
    await decorateFact(fact);
    update();

    async function onDelete() {
        const choice = window.confirm('Are you sure you want to delete this item?');

        if (choice === true) {
            await deleteFact(id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await likeFact(fact._id);
        fact.likes++;
        fact.canLike = false;
        update();
    }

    function update() {
        ctx.render(detailsTemplate(fact, onDelete, onLike));
    }
}

async function decorateFact(fact) {
    fact.isOwner = getUserData()?._id === fact._ownerId;
    fact.likes = await getAllLikesForPost(fact._id);

    const userData = getUserData();
    fact.canLike = !(await hasUserLikedFact(fact._id, userData?._id)) && userData;
}
