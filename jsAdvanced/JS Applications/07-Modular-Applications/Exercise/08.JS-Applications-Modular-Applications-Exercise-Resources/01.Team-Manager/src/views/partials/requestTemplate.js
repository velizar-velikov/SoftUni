import { html } from '../../lib/lib.js';

export const requestTemplate = (member, onApprove, onDecline) => html`
    <li>
        ${member.user.username}
        <a href="javascript:void(0)" class="tm-control action" @click=${onApprove}>Approve</a>
        <a href="javascript:void(0)" class="tm-control action" @click=${onDecline}>Decline</a>
    </li>
`;
