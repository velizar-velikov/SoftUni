import { addComment, getCommentsForGame } from '../data/comments.js';
import { deleteGame, getGameById } from '../data/games.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { commentTemplate } from './partials.js';

const detailsTemplate = (game, comments, isOwner, canComment, onDelete, onComment) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
            <div class="game-header">
                <img class="game-img" src=${game.imageUrl} />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>

            <p class="text">${game.summary}</p>

            <div class="details-comments">
                <h2>Comments:</h2>

                ${comments.length > 0
                    ? html` <ul>
                          ${comments.map(commentTemplate)}
                      </ul>`
                    : html` <p class="no-comment">No comments.</p>`}
            </div>

            ${isOwner
                ? html` <div class="buttons">
                      <a href="/details/${game._id}/edit" class="button">Edit</a>
                      <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                  </div>`
                : null}
        </div>

        ${canComment
            ? html` <article class="create-comment">
                  <label>Add new comment:</label>
                  <form class="form" @submit=${onComment}>
                      <textarea name="comment" placeholder="Comment......"></textarea>
                      <input class="btn submit" type="submit" value="Add Comment" />
                  </form>
              </article>`
            : null}
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const game = await getGameById(id);
    const gameId = game._id;

    const gameComments = await getCommentsForGame(gameId);

    const isOwner = game._ownerId === ctx.user?._id;
    const canComment = ctx.user && !isOwner;

    update(gameComments);

    function update(gameComments) {
        ctx.render(detailsTemplate(game, gameComments, isOwner, canComment, onDelete, createSubmitHandler(onComment)));
    }

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this game?');

        if (confirmed) {
            await deleteGame(id);
            ctx.goTo('/');
        }
    }

    async function onComment({ comment }, form) {
        if (!comment) {
            return alert('At least one character is required to comment.');
        }

        await addComment({ gameId, comment });

        const comments = await getCommentsForGame(gameId);
        update(comments);
        form.reset();
    }
}
