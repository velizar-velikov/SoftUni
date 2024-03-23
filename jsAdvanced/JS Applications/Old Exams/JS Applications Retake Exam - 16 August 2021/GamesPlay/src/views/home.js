import { getAllNewGames } from '../data/games.js';
import { html } from '../lib/lib.js';
import { homeGameCard } from './partials.js';

const homeTemplate = (games) => html`
    <section id="welcome-world">
        <div class="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />

        <div id="home-page">
            <h1>Latest Games</h1>

            ${games.length > 0 ? html`${games.map(homeGameCard)}` : html`<p class="no-articles">No games yet</p>`}
        </div>
    </section>
`;

export async function showHome(ctx) {
    const newGames = await getAllNewGames();

    ctx.render(homeTemplate(newGames));
}
