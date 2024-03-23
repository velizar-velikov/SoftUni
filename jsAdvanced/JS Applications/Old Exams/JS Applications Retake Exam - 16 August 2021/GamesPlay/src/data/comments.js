import { get, post } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allCommentsForGame: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    comments: '/data/comments',
};

export async function getCommentsForGame(gameId) {
    return await get(host + endpoints.allCommentsForGame(gameId));
}

export async function addComment(data) {
    return await post(host + endpoints.comments, data);
}
