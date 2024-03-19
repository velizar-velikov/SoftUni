import { getMotorcyclesByModel } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { parseQuery } from '../utils/queryHelper.js';

const searchTemplate = (onSearch, hasSearched, motorcycles) => html`
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form @submit=${onSearch} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4 id="result-heading">Results:</h4>

        ${hasSearched
            ? html`
                  <div class="search-result">
                      ${motorcycles.length > 0
                          ? html`${motorcycles.map(motorcycleTemplate)}`
                          : html`<h2 class="no-avaliable">No result.</h2>`}
                  </div>
              `
            : null}
    </section>
`;

const motorcycleTemplate = (motorcycle) => html`
    <div class="motorcycle">
        <img src=${motorcycle.imageUrl} alt="example1" />
        <h3 class="model">${motorcycle.model}</h3>
        <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
    </div>
`;

export async function showSearchView(ctx) {
    const query = parseQuery(ctx.querystring);

    if (query.search) {
        const motorcycles = await getMotorcyclesByModel(query.search);
        update(true, motorcycles);
    } else {
        update();
    }

    function update(hasSearched, motorcycles) {
        ctx.render(searchTemplate(createSubmitHandler(onSearch), hasSearched, motorcycles));
    }

    async function onSearch({ search }) {
        if (!search) {
            alert('Search must contain at least one character.');
            ctx.goTo('/search');
        } else {
            ctx.goTo(`/search/?search=${search}`);
        }
    }
}
