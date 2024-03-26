import { addBuy, deleteProduct, getProductById, getTotalBuysForProduct, hasUserBoughtProduct } from '../data/data.js';
import { html } from '../lib/lib.js';
import { getUserId } from '../utils/userHelper.js';

const detailsTemplate = (product, isOwner, canBuy, boughts, onDelete, onBuy) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${product.imageUrl} alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">Category: <span id="categories">${product.category}</span></p>
            <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Bought: <span id="buys">${boughts}</span> times.</h4>
                    <span>${product.description}</span>
                </div>
            </div>

            ${isOwner
                ? html` <div id="action-buttons">
                      <a href="/details/${product._id}/edit" id="edit-btn">Edit</a>
                      <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                  </div>`
                : canBuy
                ? html` <div id="action-buttons">
                      <a href="javascript:void(0)" id="buy-btn" @click=${onBuy}>Buy</a>
                  </div>`
                : null}
            <!--Edit and Delete are only for creator-->
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    // const [product, boughts] = await Promise.all(getProductById(id), getTotalBuysForProduct(id));
    const product = await getProductById(id);
    let boughts = await getTotalBuysForProduct(id);

    const isOwner = getUserId() === product._ownerId;
    let canBuy = ctx.user && !(await hasUserBoughtProduct(id, ctx.user?._id));

    update();

    function update() {
        ctx.render(detailsTemplate(product, isOwner, canBuy, boughts, onDelete, onBuy));
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');

        if (choice) {
            await deleteProduct(id);
            ctx.goTo('/dashboard');
        }
    }

    async function onBuy() {
        await addBuy({ productId: id });
        canBuy = false;
        boughts++;
        update();
    }
}
