import { html } from '../src/lib/lib.js';

export const tattooTemplate = (tattoo) => html`
    <div class="tattoo">
        <img src="${tattoo.imageUrl}" alt="example1" />
        <div class="tattoo-info">
            <h3 class="type">${tattoo.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${tattoo.userType}</p>
            <a class="details-btn" href="/details/${tattoo._id}">Learn More</a>
        </div>
    </div>
`;
