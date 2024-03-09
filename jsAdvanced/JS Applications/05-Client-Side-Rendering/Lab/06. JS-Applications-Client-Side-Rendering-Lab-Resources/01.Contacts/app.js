import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const root = document.getElementById('contacts');

const contactTemplate = (contact) => html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${contact.name}</h2>
                <button class="detailsBtn" @click=${toggleMoreInfo}>Details</button>
                <div class="details" id=${contact.id}>
                    <p>Phone number: ${contact.phoneNumber}</p>
                    <p>Email: ${contact.email}</p>
                </div>
            </div>
        </div>
`;

start();

function start() {
    render(contacts.map(contactTemplate), root)
}

function toggleMoreInfo(event) {
    const detailsElement = event.target.parentElement.querySelector('.details');

    if (detailsElement.style.display == 'block') {
        detailsElement.style.display = 'none';
    } else {
        detailsElement.style.display = 'block';
    }
}