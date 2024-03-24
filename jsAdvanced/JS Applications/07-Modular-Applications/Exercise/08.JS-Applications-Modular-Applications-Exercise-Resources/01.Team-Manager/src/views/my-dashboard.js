import { getMyTeamMemberShips, getTeamMembers } from '../data/data.js';
import { html } from '../lib/lib.js';

const myDashboardTemplate = (teams) => html`
    <section id="my-teams">
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>

        ${teams.length == 0
            ? html`<article class="layout narrow">
                  <div class="pad-med">
                      <p>You are not a member of any team yet.</p>
                      <p>
                          <a href="/dashboard">Browse all teams</a> to join one, or use the button bellow to create your own team.
                      </p>
                  </div>
                  <div class=""><a href="/create" class="action cta">Create Team</a></div>
              </article>`
            : null}
        ${teams.map(teamTemplate)}
    </section>
`;

const teamTemplate = ({ team }) => html`
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

export async function showMyDashboard(ctx) {
    const userId = ctx.user._id;
    const teams = await getMyTeamMemberShips(userId);

    for (let { team } of teams) {
        const teamMembers = await getTeamMembers(team._id);
        team.members = teamMembers.filter((m) => m.status == 'member').length;
    }

    ctx.render(myDashboardTemplate(teams));
}
