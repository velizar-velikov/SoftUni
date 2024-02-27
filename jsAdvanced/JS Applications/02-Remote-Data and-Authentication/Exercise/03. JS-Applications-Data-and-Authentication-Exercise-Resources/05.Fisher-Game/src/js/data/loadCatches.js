import { get } from "./api.js";
import { updateCatch } from "./updateCatch.js";
import { deleteCatch } from "./deleteCatch.js";

const catchesContainer = document.getElementById('catches');
const user = JSON.parse(sessionStorage.getItem('user'));

export async function loadAllCatches() {
    const catches = await get('data/catches');

    catchesContainer.innerHTML = '';

    for (let singleCatch of catches) {
        catchesContainer.appendChild(createCatch(singleCatch));
    }
}

function createCatch({ angler, weight, species, location, bait, captureTime, _id, _ownerId }) {

    const singleCatchEl = document.createElement('div');
    singleCatchEl.className = 'catch';

    singleCatchEl.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${weight}">
        <label>Species</label>
        <input type="text" class="species" value="${species}">
        <label>Location</label>
        <input type="text" class="location" value="${location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${captureTime}">
        <button class="update" data-id="${_id}">Update</button>
        <button class="delete" data-id="${_id}">Delete</button>`;

    [...singleCatchEl.querySelectorAll('input')].forEach(handleDisabled);
    [...singleCatchEl.querySelectorAll('button')].forEach(handleDisabled);
    singleCatchEl.querySelector('button.update').addEventListener('click', updateCatch);
    singleCatchEl.querySelector('button.delete').addEventListener('click', deleteCatch);

    function handleDisabled(el) {
        if (!user) {
            el.disabled = true;
        } else {
            el.disabled = user._id === _ownerId ? false : true;
        }
    }

    return singleCatchEl;
}

