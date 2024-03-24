import {
    approveMember,
    cancelRequest,
    declineRequest,
    getAllTeamMemberships,
    getTeamById,
    leaveTeam,
    removeMember,
    sendMembershipRequest,
} from '../data/data.js';
import { html } from '../lib/lib.js';
import { memberTemplate } from './partials/memberTemplate.js';
import { requestTemplate } from './partials/requestTemplate.js';

const detailsTemplate = (team, userData, ownerStatus, membersOfTeam, pendingRequests) => html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col" />
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${membersOfTeam.length} Members</span>
                <div>
                    ${team.isOwner
                        ? html` <a href="/details/${team._id}/edit" class="action">Edit team</a>`
                        : html`
                              ${!ownerStatus ? html`<a href="javascript:void(0)" class="action">Join team</a>` : null}
                              ${ownerStatus == 'member'
                                  ? html`<a href="javascript:void(0)" class="action invert">Leave team</a>`
                                  : null}
                              ${ownerStatus == 'pending'
                                  ? html`Membership pending. <a href="javascript:void(0)">Cancel request</a>`
                                  : null}
                          `}
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${membersOfTeam.map((member) => memberTemplate(member, userData, team.isOwner))}
                </ul>
            </div>
            ${team.isOwner
                ? html` <div class="pad-large">
                      <h3>Membership Requests</h3>
                      <ul class="tm-members">
                          ${pendingRequests.map(requestTemplate)}
                      </ul>
                  </div>`
                : null}
        </article>
    </section>
`;

export async function showDetailsPage(ctx) {
    const id = ctx.params.id;

    const team = await getTeamById(id);

    const userData = ctx.user;
    team.isOwner = team._ownerId === userData?._id;

    await update();

    async function update() {
        const allMembers = await getAllTeamMemberships(team._id);
        const membersOfTeam = allMembers.filter((member) => member.status === 'member');
        const pendingRequests = allMembers.filter((member) => member.status === 'pending');

        const ownerStatus = allMembers.find((member) => member._ownerId === userData._id);

        ctx.render(detailsTemplate(team, userData, ownerStatus, membersOfTeam, pendingRequests));
    }
}
