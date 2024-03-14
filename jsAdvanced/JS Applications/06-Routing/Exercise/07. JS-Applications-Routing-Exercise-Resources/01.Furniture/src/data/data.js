import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    all: '/data/catalog',
    byId: (id) => `/data/catalog/${id}`,
    allForUser: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
};

export function getAllFurniture() {
    return get(host + endpoints.all);
}

export function getMyFurniture(userId) {
    return get(host + endpoints.allForUser(userId));
}

export function getFurnitureById(id) {
    return get(host + endpoints.byId(id));
}

export function createFurniture(make, model, year, description, price, img, material) {
    return post(host + endpoints.all, { make, model, year, description, price, img, material });
}

export function updateFurniture(id, make, model, year, description, price, img, material) {
    return put(host + endpoints.byId(id), { make, model, year, description, price, img, material });
}

export function deleteFurniture(id) {
    return del(host + endpoints.byId(id));
}
