import { get } from "./api.js";

export async function showAllOrders(userId) {
    console.log(userId);
    const orders = await get(`data/orders?where=_ownerId%3D${userId}`);
    console.log(orders);
}