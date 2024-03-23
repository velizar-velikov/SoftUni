import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    games: '/data/games',
    gameById: (id) => `/data/games/${id}`,
    allGames: '/data/games?sortBy=_createdOn%20desc',
    newGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
};

export async function getAllGames() {
    return await get(host + endpoints.allGames);
}

export async function getAllNewGames() {
    return await get(host + endpoints.newGames);
}

export async function getGameById(id) {
    return await get(host + endpoints.gameById(id));
}

export async function createGame(data) {
    return await post(host + endpoints.games, data);
}

export async function editGame(id, data) {
    return await put(host + endpoints.gameById(id), data);
}

export async function deleteGame(id) {
    return await del(host + endpoints.gameById(id));
}
