import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allMotorcycles: '/data/motorcycles?sortBy=_createdOn%20desc',
    motorcycles: '/data/motorcycles',
    motorcycleById: (id) => `/data/motorcycles/${id}`,
    motorcyclesByName: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`,
};

export const getAllMotorcycles = async () => {
    return await get(host + endpoints.allMotorcycles);
};

export const getMotorcycleById = async (id) => {
    return await get(host + endpoints.motorcycleById(id));
};

export const getMotorcyclesByModel = async (name) => {
    return await get(host + endpoints.motorcyclesByName(name));
};

export const addMotorcycle = async (data) => {
    return await post(host + endpoints.motorcycles, data);
};

export const editMotorcycle = async (id, data) => {
    return await put(host + endpoints.motorcycleById(id), data);
};

export const deleteMotorcycle = async (id) => {
    return await del(host + endpoints.motorcycleById(id));
};
