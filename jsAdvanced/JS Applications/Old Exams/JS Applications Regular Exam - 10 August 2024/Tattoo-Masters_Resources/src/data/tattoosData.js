import { getUserData } from '../utils/userHelper.js';
import { del, get, post, put } from './api.js';

const url = 'http://localhost:3030';

const endpoints = {
    all: '/data/tattoos?sortBy=_createdOn%20desc',
    create: '/data/tattoos',
    byId: (id) => `/data/tattoos/${id}`,
    likes: '/data/likes',
    tattooLikes: (tattooId) => `/data/likes?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`,
    tattooLikeByUser: (tattooId, userId) =>
        `/data/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllTattoos() {
    return await get(url + endpoints.all);
}

export async function addTattoo(data) {
    return await post(url + endpoints.create, data);
}

export async function getTattooById(id) {
    return await get(url + endpoints.byId(id));
}

export async function editTattoo(id, data) {
    return await put(url + endpoints.byId(id), data);
}

export async function deleteTattoo(id) {
    return await del(url + endpoints.byId(id));
}

export async function likeTattoo(tattooId) {
    return await post(url + endpoints.likes, { tattooId });
}

export async function getLikesForTattoo(tattooId) {
    return await get(url + endpoints.tattooLikes(tattooId));
}

async function getLikesForTattooByUser(tattooId, userId) {
    return await get(url + endpoints.tattooLikeByUser(tattooId, userId));
}

export async function hasUserLikedThisTattoo(tattooId) {
    const userData = getUserData();

    //either 0 or 1
    const likes = await getLikesForTattooByUser(tattooId, userData?._id);

    return Boolean(likes);
}
