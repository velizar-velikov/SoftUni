import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFactById, updateFact } from "../data/data.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (fact, onEdit) => html`
 <section id="edit">
        <div class="form">
          <h2>Edit Fact</h2>
          <form @submit=${onEdit} class="edit-form">
            <input .value=${fact.category} type="text" name="category" id="category" placeholder="Category" />
            <input .value=${fact.imageUrl} type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea .value=${fact.description} id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea .value=${fact.moreInfo} id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
              cols="50"></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </section>
`;

export async function showEditPage(ctx) {
  const id = ctx.params.id;

  const fact = await getFactById(id);
  ctx.render(editTemplate(fact, createSubmitHandler(onEdit)));

  async function onEdit({ category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo }, form) {

    if ([category, imageUrl, description, moreInfo].some(f => f == '')) {
      return alert('All fields are required!');
    }

    await updateFact(id, category, imageUrl, description, moreInfo);
    ctx.page.redirect(`/details/${id}`);
  }
}