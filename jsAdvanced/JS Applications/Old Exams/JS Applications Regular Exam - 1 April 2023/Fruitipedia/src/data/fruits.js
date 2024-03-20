import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allFruits: '/data/fruits?sortBy=_createdOn%20desc',
    fruits: '/data/fruits',
    fruitsById: (id) => `/data/fruits/${id}`,
    allfruitsByName: (name) => `/data/fruits?where=name%20LIKE%20%22${name}%22`,
};

export const getAllFruits = async () => {
    return await get(host + endpoints.allFruits);
};

export const getFruitById = async (id) => {
    return await get(host + endpoints.fruitsById(id));
};

export const createFruit = async (data) => {
    return await post(host + endpoints.fruits, data);
};

export const editFruit = async (id, data) => {
    return await put(host + endpoints.fruitsById(id), data);
};

export const deleteFruit = async (id) => {
    return await del(host + endpoints.fruitsById(id));
};

export const getAllFruitsByName = async (name) => {
    return await get(host + endpoints.allfruitsByName(name));
};
