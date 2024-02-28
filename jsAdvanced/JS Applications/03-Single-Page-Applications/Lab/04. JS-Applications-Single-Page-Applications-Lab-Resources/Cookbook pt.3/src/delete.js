import { del } from "./data/api.js";

export async function deleteRecipe(ev, id) {
    ev.preventDefault();

    if (confirm('Are you sure you want to delete this recipe?')) {
        await del(`data/recipes/${id}`);

        const currentArticle = ev.target.parentElement.parentElement;
        const h2 = currentArticle.querySelector('h2');
        h2.textContent = 'Recipe deleted';
        h2.nextSibling.remove();
        h2.nextSibling.remove();
        h2.nextSibling.remove();
    }

}