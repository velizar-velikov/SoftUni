import { getAllGames } from '../data/games.js';
import { html } from '../lib/lib.js';
import { dashboardGameCard } from './partials.js';

const dashboardTemplate = (games) => html`
    <section id="catalog-page">
        <h1>All Games</h1>

        ${games.length > 0 ? html` ${games.map(dashboardGameCard)}` : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
`;

export async function showDashboard(ctx) {
    const games = await getAllGames();

    ctx.render(dashboardTemplate(games));
}
