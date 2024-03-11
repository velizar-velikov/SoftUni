import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllCharacters } from "../data/data.js";


const dashboardTemplate = (characters) => html`
 <h2>Characters</h2>
      
        ${characters.length > 0
    ? html`
    <section id="characters">
        ${characters.map(characterTemplate)}
      </section>`
    : html`<h2>No added Heroes yet.</h2>`} 
`;

const characterTemplate = (character) => html`
<div class="character">
          <img src=${character.imageUrl} alt="example1" />
          <div class="hero-info">
            <h3 class="category">${character.category}</h3>
            <p class="description">${character.description}</p>
            <a class="details-btn" href="/details/${character._id}">More Info</a>
</div>
`;

export async function showDashboardPage(ctx) {

  const characters = await getAllCharacters();
  ctx.render(dashboardTemplate(characters));
}