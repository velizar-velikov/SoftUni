import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector('.content');
form.addEventListener('submit', load);

const rootElement = document.getElementById('root');

function load(e) {
    e.preventDefault();

    const towns = (new FormData(form)).get('towns');

    if (towns == '') {
        return;
    }
    render(townsTemplate(towns), rootElement);
    form.reset();
}

const townsTemplate = (towns) => html`
<ul>
    ${towns.split(', ').map(town => html`<li>${town}</li>`)}
</ul>`;