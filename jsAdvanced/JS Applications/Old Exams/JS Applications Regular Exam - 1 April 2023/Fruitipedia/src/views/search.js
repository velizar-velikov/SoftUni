import { getAllFruitsByName } from '../data/fruits.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { parseQuery } from '../utils/queryHelper.js';

const searchTemplate = (onSearch, fruits, search = '') => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit=${onSearch}>
                <input type="text" name="search" id="search-input" .value=${search} />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>

        ${fruits
            ? html` ${fruits.length > 0
                  ? html` <div class="search-result">${fruits.map(fruitTemplate)}</div>`
                  : html`<p class="no-result">No result.</p>`}`
            : null}
    </section>
`;

const fruitTemplate = (fruit) => html`
    <div class="fruit">
        <img src=${fruit.imageUrl} alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">${fruit.description}</p>
        <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
`;

export async function showSearchView(ctx) {
    const query = parseQuery(ctx.querystring);
    const search = query.search;

    if (!search) {
        update();
    } else {
        const fruits = await getAllFruitsByName(search);
        update(fruits, search);
    }

    function update(fruits, search) {
        ctx.render(searchTemplate(createSubmitHandler(onSearch), fruits, search));
    }

    async function onSearch({ search }) {
        if (!search) {
            return alert('Search must contain at least one character.');
        }

        ctx.goTo(`/search/?search=${search}`);
    }
}
