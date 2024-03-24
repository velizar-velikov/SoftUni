import { getMyTeamMemberShips, getAllTeamMemberships } from '../data/data.js';
import { html } from '../lib/lib.js';
import { teamMyDashboardTemplate } from './partials/teamMyDashbTemplate.js';

const myDashboardTemplate = (teams) => html`
    <section id="my-teams">
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>

        <article class="layout narrow">
            ${teams.length === 0
                ? html`<div class="pad-med">
                      <p>You are not a member of any team yet.</p>
                      <p>
                          <a href="/dashboard">Browse all teams</a> to join one, or use the button bellow to create your own team.
                      </p>
                  </div>`
                : null}

            <div class="pad-med"><a href="/create" class="action cta">Create Team</a></div>
        </article>
        ${teams.map(teamMyDashboardTemplate)}
    </section>
`;

export async function showMyDashboard(ctx) {
    const userId = ctx.user._id;
    const teams = await getMyTeamMemberShips(userId);

    for (let { team } of teams) {
        const allTeamMembers = await getAllTeamMemberships(team._id);
        team.members = allTeamMembers.filter((m) => m.status == 'member').length;
    }

    ctx.render(myDashboardTemplate(teams));
}
