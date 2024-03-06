import { html, render } from "../node_modules/lit-html/lit-html.js";

const townsUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';

const select = document.getElementById('menu');
const townInput = document.getElementById('itemText');
document.querySelector('form').addEventListener('submit', addTown);

const optionTemplate = (town) => html`<option value=${town._id}>${town.text}</option>`;

await showTowns();

async function showTowns() {
    const towns = await get(townsUrl);
    render(Object.values(towns).map(town => optionTemplate(town)), select);
}

async function addTown(event) {
    event.preventDefault();

    await post(townsUrl, { text: townInput.value });
    townInput.value = '';
    await showTowns();
}

async function get(url) {
    return request('GET', url);
}

async function post(url, body) {
    return request('POST', url, body);
}

async function request(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const options = {
        method: method
    };
    if (body) {
        options.headers = headers;
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(`Error: ${error.message}`);
        throw error;
    }
}