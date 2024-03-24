import { createTeam } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const createTemplate = (onCreate, errorMessage) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form @submit=${onCreate} id="create-form" class="main-form pad-large">
                ${errorMessage ? html` <div class="error">${errorMessage}</div>` : null}
                <label>Team name: <input type="text" name="name" /></label>
                <label>Logo URL: <input type="text" name="logoUrl" /></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team" />
            </form>
        </article>
    </section>
`;

export function showCreatePage(ctx) {
    let data;

    async function onCreate(formData, form) {
        data = formData;
        const { name, logoUrl, description } = formData;

        let errorMessage = getErrorMessage();

        if (errorMessage) {
            ctx.render(createTemplate(createSubmitHandler(onCreate), errorMessage));
        } else {
            try {
                const res = await createTeam(name, logoUrl, description);

                if (!res.message) {
                    form.reset();
                    ctx.goTo(`/details/${res._id}`);
                }
            } catch (error) {
                ctx.render(createTemplate(createSubmitHandler(onCreate), error.message));
            }
        }
    }

    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    function getErrorMessage() {
        let errorMessage;
        if (data.name.length < 4) {
            errorMessage = 'Team name should be at least 4 characters long.';
        } else if (data.logoUrl.length === 0) {
            errorMessage = 'Logo URL is required.';
        } else if (data.description.length < 10) {
            errorMessage = 'Description should be at least 10 characters long.';
        }

        return errorMessage;
    }
}
