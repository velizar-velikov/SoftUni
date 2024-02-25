import { post } from "../api/api.js";

const orders = document.querySelector('.orders span:first-child');
const totalPrice = document.querySelectorAll('.orders span')[1];

export async function buyProducts() {

    const checkedProducts = Array.from(document.querySelectorAll('.table tbody tr')).filter(tr => tr.querySelector('input').checked == true);

    for (let product of checkedProducts) {
        const img = product.querySelector('img').src;
        const [name, price, factor] = Array.from(product.querySelectorAll('td p')).map(p => p.textContent);

        await post('data/orders', { img, name, price, factor });

        product.querySelector('input').checked = false;
    }
}