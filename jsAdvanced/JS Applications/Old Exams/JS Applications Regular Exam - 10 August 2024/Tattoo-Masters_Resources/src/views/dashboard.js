import { getAllTattoos } from '../data/tattoosData.js';
import { html } from '../lib/lib.js';
import { tattooTemplate } from '../../templates/tattooTemplate.js';

const dashboardTemplate = (tattoos) => html`
    <h2>Collection</h2>

    ${tattoos.length > 0
        ? html`
              <section id="tattoos">
                  <!-- Display a div with information about every post (if any)-->
                  ${tattoos.map((tattoo) => tattooTemplate(tattoo))}
              </section>
          `
        : html`
              <!-- Display an h2 if there are no posts -->
              <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
          `}
`;

export async function showDashboard(ctx) {
    const tattoos = await getAllTattoos();

    ctx.render(dashboardTemplate(tattoos));
}
