import { get } from "./api.js";

export async function showAllOrders(userId) {
    const orders = await get(`data/orders?where=_ownerId%3D"${userId}"`);

    const ordersElement = document.querySelectorAll('.orders span')[0];
    const totalPrice = document.querySelectorAll('.orders span')[1];

    ordersElement.textContent = Array.from(new Set(orders.map(order => order.name))).join(', ');
    totalPrice.textContent = orders.map(order => Number(order.price)).reduce((acc, val) => acc + val, 0);
}