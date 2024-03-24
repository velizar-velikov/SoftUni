import { getAllTeams, getTeamMembers } from '../data/data.js';
import { html } from '../lib/lib.js';

const dashboardTemplate = (teams, userData) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>

        ${userData
            ? html` <article class="layout narrow">
                  <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
              </article>`
            : null}
        ${teams.map(teamTemplate)}
    </section>
`;

const teamTemplate = (team) => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col" />
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

export async function showDashboardPage(ctx) {
    const teams = await getAllTeams();

    for (let team of teams) {
        const teamMembers = await getTeamMembers(team._id);
        team.members = teamMembers.filter((m) => m.status == 'member').length;
    }
    ctx.render(dashboardTemplate(teams, ctx.user));
}
