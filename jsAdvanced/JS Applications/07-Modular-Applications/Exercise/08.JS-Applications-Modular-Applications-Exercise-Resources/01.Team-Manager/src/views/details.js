import {
    approveMember,
    cancelRequest,
    declineRequest,
    getMemberById,
    getTeamById,
    getTeamMembers,
    leaveTeam,
    removeMember,
    sendMembershipRequest,
} from '../data/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils/userHelper.js';

const detailsTemplate = async (team, userData, member) => html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col" />
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${team.members.filter((m) => m.status == 'member').length} Members</span>
                <div>
                    ${team.isOwner
                        ? html` <a href="/details/${team._id}/edit" class="action">Edit team</a>`
                        : html`
                              ${member.status !== 'member' && member.status !== 'pending'
                                  ? html`<a @click=${() => member.onJoin()} href="javascript:void(0)" class="action"
                                        >Join team</a
                                    >`
                                  : null}
                              ${member.status == 'member'
                                  ? html`<a @click=${() => member.onLeave()} href="javascript:void(0)" class="action invert"
                                        >Leave team</a
                                    >`
                                  : null}
                              ${member.status == 'pending'
                                  ? html`Membership pending.
                                        <a @click=${() => member.onCancel()} href="javascript:void(0)">Cancel request</a>`
                                  : null}
                          `}
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${team.isOwner ? html`<li>${userData.username}</li>` : null}
                    ${team.members.filter((m) => m.status == 'member').map(memberTemplate)}
                </ul>
            </div>
            ${team.isOwner
                ? html` <div class="pad-large">
                      <h3>Membership Requests</h3>
                      <ul class="tm-members">
                          ${team.members.filter((m) => m.status == 'pending').map(requestTemplate)}
                      </ul>
                  </div>`
                : null}
        </article>
    </section>
`;

const memberTemplate = (member) => html`
    ${member._ownerId !== getUserData()._id
        ? html`<li>
              ${member.user.username}
              <a @click=${() => member.remove()} href="javascript:void(0)" class="tm-control action">Remove from team</a>
          </li>`
        : null}
`;

const requestTemplate = (member) => html`
    <li>
        ${member.user.username}
        <a @click=${() => member.approve()} href="javascript:void(0)" class="tm-control action">Approve</a>
        <a @click=${() => member.decline()} href="javascript:void(0)" class="tm-control action">Decline</a>
    </li>
`;

export async function showDetailsPage(ctx) {
    const id = ctx.params.id;

    const team = await getTeamById(id);
    team.members = await getTeamMembers(team._id);

    const userData = getUserData();
    team.isOwner = team._ownerId === userData._id;

    const memberFunctionality = await createMemberFunctionality();
    console.log(memberFunctionality);
    team.members.forEach((m) => {
        Object.assign(m, memberFunctionality);
    });

    console.log(memberFunctionality.status);

    async function getStatus(memberId) {
        try {
            const teamMembers = await getTeamMembers(team._id);
            const currentMember = teamMembers.find((m) => m._ownerId === memberId);

            return currentMember?.status;
        } catch (err) {
            alert(err.status);
        }
    }

    await update();

    async function update() {
        console.log(memberFunctionality);
        ctx.render(await detailsTemplate(team, userData, memberFunctionality));
    }

    async function createMemberFunctionality(memberId) {
        return {
            isOwner: team.isOwner,
            // status: await getStatus(await this._getMemberId()),
            async onJoin() {
                await sendMembershipRequest(team._id);
                this.status = 'pending';
                await update();
            },
            async onLeave() {
                const memberId = await this._getMemberId();
                await leaveTeam(memberId);
                this.status = 'left';
                await update();
            },
            async onCancel() {
                const memberId = await this._getMemberId();
                await cancelRequest(memberId);
                this.status = 'canceled';
                await update();
            },
            async remove() {
                const memberId = await this._getMemberId();
                await removeMember(memberId);
                this.status = 'removed';
                await update();
            },
            async approve() {
                const memberId = await this._getMemberId();
                await approveMember(memberId);
                debugger;
                this.status = 'member';
                await update();
            },
            async decline() {
                const memberId = await this._getMemberId();
                await declineRequest(memberId);
                this.status = 'declined';
                await update();
            },
            async _getMemberId() {
                const teamMembers = await getTeamMembers(team._id);
                console.log(this);
                return teamMembers.find((m) => m._ownerId === userData._id)?._id;
            },
        };
    }
}
