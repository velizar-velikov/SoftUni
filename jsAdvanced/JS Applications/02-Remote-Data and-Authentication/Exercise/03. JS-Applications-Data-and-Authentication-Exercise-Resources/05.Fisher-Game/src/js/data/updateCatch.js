import { put } from "./api.js";

export async function updateCatch(e) {
    const button = e.target;
    const id = button.dataset.id;

    const catchDiv = button.parentElement;

    const angler = catchDiv.querySelector('.angler').value;
    const weight = catchDiv.querySelector('.weight').value;
    const species = catchDiv.querySelector('.species').value;
    const location = catchDiv.querySelector('.location').value;
    const bait = catchDiv.querySelector('.bait').value;
    const captureTime = catchDiv.querySelector('.captureTime').value;

    await put(`data/catches/${id}`, { angler, weight, species, location, bait, captureTime });
}