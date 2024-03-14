import { createFurniture } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler, validateInput } from '../utils/formHelper.js';
import { changeNavLinkColour } from '../utils/navHelper.js';

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Create New Furniture</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form @submit=${onCreate}>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-make">Make</label>
                            <input class="form-control valid" id="new-make" type="text" name="make" />
                        </div>
                        <div class="form-group has-success">
                            <label class="form-control-label" for="new-model">Model</label>
                            <input class="form-control is-valid" id="new-model" type="text" name="model" />
                        </div>
                        <div class="form-group has-danger">
                            <label class="form-control-label" for="new-year">Year</label>
                            <input class="form-control is-invalid" id="new-year" type="number" name="year" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-description">Description</label>
                            <input class="form-control" id="new-description" type="text" name="description" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-price">Price</label>
                            <input class="form-control" id="new-price" type="number" name="price" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-image">Image</label>
                            <input class="form-control" id="new-image" type="text" name="img" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-material">Material (optional)</label>
                            <input class="form-control" id="new-material" type="text" name="material" />
                        </div>
                        <input type="submit" class="btn btn-primary" value="Create" />
                    </div>
                </div>
            </form>
        </div>
    </section>
`;

export function showCreatePage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));
    changeNavLinkColour('createLink');

    const form = document.querySelector('section#create form');

    const formInputs = [...form].slice(0, -1);
    formInputs.forEach((input) => input.addEventListener('change', (e) => validateInput(input)));

    async function onCreate({ make, model, year, description, price, img, material }, form) {
        const areValid = formInputs.every(validateInput);

        if (areValid) {
            await createFurniture(make, model, year, description, price, img, material);

            form.reset();
            ctx.page.redirect('/dashboard');
        }
    }
}
