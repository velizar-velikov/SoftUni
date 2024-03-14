import { getFurnitureById, updateFurniture } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler, validateInput } from '../utils.js';

const edtiTemplate = (singleFurniture, onEdit) => html`
    <section id="edit">
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Edit Furniture</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form @submit=${onEdit}>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-make">Make</label>
                            <input .value=${singleFurniture.make} class="form-control" id="new-make" type="text" name="make" value="Table" />
                        </div>
                        <div class="form-group has-success">
                            <label class="form-control-label" for="new-model">Model</label>
                            <input .value=${singleFurniture.model} class="form-control is-valid" id="new-model" type="text" name="model" value="Swedish" />
                        </div>
                        <div class="form-group has-danger">
                            <label class="form-control-label" for="new-year">Year</label>
                            <input .value=${singleFurniture.year} class="form-control is-invalid" id="new-year" type="number" name="year" value="2015" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-description">Description</label>
                            <input
                                .value=${singleFurniture.description}
                                class="form-control"
                                id="new-description"
                                type="text"
                                name="description"
                                value="Medium table"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-price">Price</label>
                            <input .value=${singleFurniture.price} class="form-control" id="new-price" type="number" name="price" value="235" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-image">Image</label>
                            <input .value=${singleFurniture.img} class="form-control" id="new-image" type="text" name="img" value="/images/table.png" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-material">Material (optional)</label>
                            <input .value=${singleFurniture.material} class="form-control" id="new-material" type="text" name="material" value="Wood" />
                        </div>
                        <input type="submit" class="btn btn-info" value="Edit" />
                    </div>
                </div>
            </form>
        </div>
    </section>
`;

export async function showEditPage(ctx) {
    const id = ctx.params.id;

    const singleFurniture = await getFurnitureById(id);

    if (singleFurniture.img.startsWith('./')) {
        singleFurniture.img = singleFurniture.img.slice(1);
    }

    ctx.render(edtiTemplate(singleFurniture, createSubmitHandler(onEdit)));

    const form = document.querySelector('section#edit form');
    const formInputs = [...form].slice(0, -1);
    formInputs.forEach((input) => input.addEventListener('change', (e) => validateInput(input)));

    async function onEdit({ make, model, year, description, price, img, material }, form) {
        const areValid = formInputs.every(validateInput);

        if (areValid) {
            await updateFurniture(id, make, model, year, description, price, img, material);

            form.reset();
            ctx.page.redirect(`/details/${id}`);
        }
    }
}
