import { html } from '../../lib/lib.js';

export const requestTemplate = (member) => html`
    <li>
        ${member.user.username}
        <a href="javascript:void(0)" class="tm-control action">Approve</a>
        <a href="javascript:void(0)" class="tm-control action">Decline</a>
    </li>
`;
