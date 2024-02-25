import { get } from "./api.js";

if (document.querySelectorAll('a')[1].textContent == 'Login') {
    window.addEventListener('load', loadFurniture);
}

export async function loadFurniture(e, isLogged) {

    const furnituresData = await get('data/furniture');

    const tbody = document.querySelector('.table tbody');
    tbody.innerHTML = '';

    for (let furnitureData of furnituresData) {
        tbody.appendChild(createRow(furnitureData, isLogged));
    }
}

function createRow(furnitureData, isLogged) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img
            src="${furnitureData.img}">
    </td>
    <td>
        <p>${furnitureData.name}</p>
    </td>
    <td>
        <p>${furnitureData.price}</p>
    </td>
    <td>
        <p>${furnitureData.factor}</p>
    </td>
    <td>
    ${isLogged == true
            ? `<input type="checkbox" />`
            : `<input type="checkbox" disabled />`}
    </td>`;

    return row;
} 