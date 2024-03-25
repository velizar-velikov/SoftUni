import { html } from '../lib/lib.js';

import { getAllTeamMemberships, getTeamById } from '../data/teams.js';
import { notOwnerService, ownerService } from '../data/members.js';

import { memberTemplate } from './partials/memberTemplate.js';
import { requestTemplate } from './partials/requestTemplate.js';

const detailsTemplate = (team, userData, userStatus, membersOfTeam, pendingRequests, userActions) => html`
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
                              ${!userStatus && userData
                                  ? html`<a href="javascript:void(0)" class="action" @click=${userActions.onJoin}>Join team</a>`
                                  : null}
                              ${userStatus == 'member'
                                  ? html`<a href="javascript:void(0)" class="action invert" @click=${userActions.onLeave}
                                        >Leave team</a
                                    >`
                                  : null}
                              ${userStatus == 'pending'
                                  ? html`Membership pending.
                                        <a href="javascript:void(0)" @click=${userActions.onCancel}>Cancel request</a>`
                                  : null}
                          `}
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${membersOfTeam.map((member) => memberTemplate(member, userData, team.isOwner, member.onRemove))}
                </ul>
            </div>
            ${team.isOwner
                ? html` <div class="pad-large">
                      <h3>Membership Requests</h3>
                      <ul class="tm-members">
                          ${pendingRequests.map((member) => requestTemplate(member, member.onApprove, member.onDecline))}
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

    let userMemberId = null;

    // create user actions as object methods
    const userActions = createUserActions();
    const ownerActions = createOwnerActions();

    await update();

    async function update() {
        const allMembers = await getAllTeamMemberships(team._id);
        const membersOfTeam = allMembers.filter((member) => member.status === 'member');
        const pendingRequests = allMembers.filter((member) => member.status === 'pending');

        // assigning each member the event listener to be added on the anchor element
        membersOfTeam.forEach((member) => {
            member.onRemove = ownerActions.onRemove(member._id);
        });
        pendingRequests.forEach((member) => {
            member.onApprove = ownerActions.onApprove(member._id);
            member.onDecline = ownerActions.onDecline(member._id);
        });

        const userMemberObject = allMembers.find((member) => member._ownerId === userData?._id);

        const userStatus = userMemberObject?.status;
        userMemberId = userMemberObject?._id;

        ctx.render(detailsTemplate(team, userData, userStatus, membersOfTeam, pendingRequests, userActions));
    }

    function createUserActions() {
        return {
            onJoin,
            onCancel,
            onLeave,
        };

        async function onJoin() {
            await notOwnerService.sendMembershipRequest(team._id);
            update();
        }

        async function onCancel() {
            await notOwnerService.cancelRequest(userMemberId);
            update();
        }

        async function onLeave() {
            await notOwnerService.leaveTeam(userMemberId);
            update();
        }
    }

    function createOwnerActions() {
        return {
            onApprove,
            onDecline,
            onRemove,
        };

        function onApprove(memberId) {
            return async function () {
                await ownerService.approveMember(memberId);
                update();
            };
        }

        function onDecline(memberId) {
            return async function () {
                await ownerService.declineRequest(memberId);
                update();
            };
        }

        function onRemove(memberId) {
            return async function () {
                await ownerService.removeMember(memberId);
                update();
            };
        }
    }
}
