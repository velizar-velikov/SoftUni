import { html } from '../../lib/lib.js';

export const memberTemplate = (member, userData, isOwner) => html`<li>
    ${member.user.username}
    ${member._ownerId !== userData?._id && isOwner
        ? html`
          <a href="javascript:void(0)" class="tm-control action">Remove from team</a>
      </li>`
        : null}
</li> `;
