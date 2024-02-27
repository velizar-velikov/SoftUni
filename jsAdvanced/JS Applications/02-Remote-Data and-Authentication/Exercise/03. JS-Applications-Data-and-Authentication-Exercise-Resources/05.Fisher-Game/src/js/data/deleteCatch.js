import { del } from "./api.js";

export async function deleteCatch(e) {
    const button = e.target;
    const id = button.dataset.id;

    if (window.confirm('Are you sure you want to delete this item?')) {
        await del(`data/catches/${id}`);
        button.parentElement.remove();
    }
}