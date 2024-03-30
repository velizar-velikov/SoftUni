import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allPunks: '/data/cyberpunk?sortBy=_createdOn%20desc',
    punks: '/data/cyberpunk',
    punkById: (id) => `/data/cyberpunk/${id}`,
};

export const getAllPunks = async () => {
    return await get(host + endpoints.allPunks);
};

export const getPunkById = async (id) => {
    return await get(host + endpoints.punkById(id));
};

export const createPunk = async (data) => {
    return await post(host + endpoints.punks, data);
};

export const editPunk = async (id, data) => {
    return await put(host + endpoints.punkById(id), data);
};

export const deletePunk = async (id) => {
    return await del(host + endpoints.punkById(id));
};
