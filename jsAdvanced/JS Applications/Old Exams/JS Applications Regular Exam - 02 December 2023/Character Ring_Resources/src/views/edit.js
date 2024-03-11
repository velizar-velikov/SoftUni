import { html } from "../../node_modules/lit-html/lit-html.js";
import { getCharacterById, updateCharacter } from "../data/data.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (onEdit, character) => html`
      <section id="edit">
        <div class="form">
          <img class="border" src=${character.imageUrl} alt="">
          <h2>Edit Character</h2>
          <form @submit=${onEdit} class="edit-form">
            <input .value=${character.category} type="text" name="category" id="category" placeholder="Character Type" />
            <input .value=${character.imageUrl} type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea .value=${character.description} id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea .value=${character.moreInfo} id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
              cols="10"></textarea>
            <button type="submit">Edit</button>
          </form>
          <img class="border" src="./images/border.png" alt="">
        </div>
      </section>
`;

export async function showEditPage(ctx) {

  const id = ctx.params.id;
  debugger
  const character = await getCharacterById(id);
  ctx.render(editTemplate(createSubmitHandler(onEdit), character));

  async function onEdit({ category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo }, form) {

    if ([category, imageUrl, description, moreInfo].some(f => f == '')) {
      return alert('All fields are required!');
    }

    await updateCharacter(id, category, imageUrl, description, moreInfo);
    ctx.page.redirect(`/details/${character._id}`);
  }
}