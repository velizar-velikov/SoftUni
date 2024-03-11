import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFacts } from "../data/data.js";

const dashboardTemplate = (facts) => html`
      <h2>Fun Facts</h2>
      ${facts.length > 0
    ? html`
      <section id="dashboard">
  ${facts.map(factTemplate)}
      </section>`
    : html`
      <!-- Display an h2 if there are no posts -->
      <h2>No Fun Facts yet.</h2>`}
`;

const factTemplate = (fact) => html`
<div class="fact">
          <img src=${fact.imageUrl} alt="example1" />
          <h3 class="category">${fact.category}</h3>
          <p class="description">${fact.description}.</p>
          <a class="details-btn" href="/details/${fact._id}">More Info</a>
        </div>
`;

export async function showDashboardPage(ctx) {

  const facts = await getFacts();

  ctx.render(dashboardTemplate(facts));
}