import { getAllTeams, getAllTeamMemberships } from '../data/teams.js';
import { html } from '../lib/lib.js';
import { teamDashboardTemplate } from './partials/teamDashboardTemplate.js';

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
        ${teams.map(teamDashboardTemplate)}
    </section>
`;

export async function showDashboardPage(ctx) {
    const teams = await getAllTeams();

    for (let team of teams) {
        const allTeamMembers = await getAllTeamMemberships(team._id);
        team.members = allTeamMembers.filter((m) => m.status == 'member').length;
    }
    ctx.render(dashboardTemplate(teams, ctx.user));
}
