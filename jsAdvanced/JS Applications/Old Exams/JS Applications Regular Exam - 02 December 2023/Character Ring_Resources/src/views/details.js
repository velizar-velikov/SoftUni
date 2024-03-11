import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteCharacter, getAllLikesById, getCharacterById, hasUserLikedCharacter, likeCharacter } from "../data/data.js";
import { getUserData, isOwner } from "../util.js";


const detailsTemplate = (character, onDelete, onLike) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${character.imageUrl} alt="example1" />
          <div>
            <p id="details-category">${character.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${character.description}</p>
                <p id="more-info">${character.moreInfo}</p>
              </div>
            </div>
            <h3>Is This Useful:<span id="likes">${character.likes}</span></h3>

            ${character.canEdit
    ? html`
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              <a href="/details/${character._id}/edit" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
              ` : null}
            ${character.canLike
    ? html`
              <div id="action-buttons">
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
  const character = await getCharacterById(id);
  const isOwnerOfChar = isOwner(character._ownerId);

  character.canEdit = isOwnerOfChar;
  character.likes = await getAllLikesById(id);

  const userData = getUserData();

  let canLike;
  if (!userData) {
    canLike = false;
  } else {
    const hasBeenLikedByUser = await hasUserLikedCharacter(character._id, userData._id);
    canLike = userData && !isOwnerOfChar && !hasBeenLikedByUser;
  }

  character.canLike = canLike;

  update();

  function update() {
    ctx.render(detailsTemplate(character, onDelete, onLike));
  }

  async function onDelete() {

    const choice = window.confirm('Are you sure you want to delete this item?');
    if (choice === true) {
      await deleteCharacter(id);
      ctx.page.redirect('/dashboard');
    }
  }

  async function onLike() {
    await likeCharacter(character._id);

    //this is easing but redirects which is going to make the api calls again
    // ctx.page.redirect(`/details/${id}`);

    //this uses closure and only rerenders the content but does not make new api calls
    character.likes++;
    character.canLike = false;
    update();
  }
}
