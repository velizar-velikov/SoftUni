import { editTeam, getTeamById } from '../data/data.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const editTemplate = (onEdit, team, errorMessage) => html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form @submit=${onEdit} id="edit-form" class="main-form pad-large">
                ${errorMessage ? html` <div class="error">${errorMessage}</div>` : null}

                <label>Team name: <input .value=${team.name} type="text" name="name" /></label>
                <label>Logo URL: <input .value=${team.logoUrl} type="text" name="logoUrl" /></label>
                <label>Description: <textarea .value=${team.description} name="description"></textarea></label>
                <input class="action cta" type="submit" value="Save Changes" />
            </form>
        </article>
    </section>
`;

export async function showEditPage(ctx) {
    const id = ctx.params.id;

    const team = await getTeamById(id);

    let data;

    async function onEdit(formData, form) {
        data = formData;
        const { name, logoUrl, description } = formData;

        let errorMessage = getErrorMessage();

        if (errorMessage) {
            ctx.render(editTemplate(createSubmitHandler(onEdit), team, errorMessage));
        } else {
            try {
                const res = await editTeam(team._id, name, logoUrl, description);

                if (!res.message) {
                    form.reset();
                    ctx.goTo(`/details/${res._id}`);
                }
            } catch (error) {
                ctx.render(editTemplate(createSubmitHandler(onEdit), team, error.message));
            }
        }
    }

    ctx.render(editTemplate(createSubmitHandler(onEdit), team));

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
