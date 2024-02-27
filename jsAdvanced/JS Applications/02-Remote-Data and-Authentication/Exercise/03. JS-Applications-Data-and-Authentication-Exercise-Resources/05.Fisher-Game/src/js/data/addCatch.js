import { post } from "./api.js";
import { loadAllCatches } from "./loadCatches.js";

export async function addCatch(e) {
    e.preventDefault();

    const addForm = document.getElementById('addForm');
    const formData = new FormData(addForm);

    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());

    if ([...formData.entries()].some(entry => entry[1] == '')) {
        alert(`All fields are required to add a new catch!`);
        return;
    } else if (isNaN(Number(weight)) || isNaN(Number(captureTime))) {
        alert('Weight and Capture Time must be numbers');
        return;
    }

    await post('data/catches', { angler, weight, species, location, bait, captureTime });
    addForm.reset();

    await loadAllCatches();
}