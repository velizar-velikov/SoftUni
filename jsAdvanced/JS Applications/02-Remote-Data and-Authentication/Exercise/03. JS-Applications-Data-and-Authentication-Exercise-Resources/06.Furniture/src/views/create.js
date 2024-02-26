import { post } from "../api/api.js";
import { loadFurniture } from "../api/loadFurniture.js";


export async function createRecipe(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let { name, price, factor, img } = Object.fromEntries(formData.entries());

    if (name == '' || price == '' || factor == '' || img == '') {
        alert('All fields are required!');
        return;
    }

    console.log(name, price, factor, img);
    await post('data/furniture', { name, price, factor, img });

    e.target.reset();
    //logged-in user
    await loadFurniture(null, true);

}