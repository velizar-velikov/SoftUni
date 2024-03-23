import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    memes: '/data/memes',
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    memeById: (id) => `/data/memes/${id}`,
    userMemes: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllMemes() {
    return await get(host + endpoints.allMemes);
}

export async function getMemeById(id) {
    return await get(host + endpoints.memeById(id));
}

export async function createMeme(data) {
    return await post(host + endpoints.memes, data);
}

export async function editMeme(id, data) {
    return await put(host + endpoints.memeById(id), data);
}

export async function deleteMeme(id) {
    return await del(host + endpoints.memeById(id));
}

export async function getUserMemes(userId) {
    return await get(host + endpoints.userMemes(userId));
}
