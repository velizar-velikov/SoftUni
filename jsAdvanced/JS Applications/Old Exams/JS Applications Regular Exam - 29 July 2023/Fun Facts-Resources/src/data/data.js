import { del, get, post, put } from "./api.js";

const host = 'http://localhost:3030';

const endpoints = {
    all: '/data/facts?sortBy=_createdOn%20desc',
    create: '/data/facts',
    byId: (id) => `/data/facts/${id}`,
    toLike: '/data/likes',
    allLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    factLikesByUser: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export const getFacts = () => {
    return get(host + endpoints.all);
}

export const getFactById = (factId) => {
    return get(host + endpoints.byId(factId));
}

export const createFact = (category, imageUrl, description, moreInfo) => {
    return post(host + endpoints.create, { category, imageUrl, description, moreInfo });
}

export const updateFact = (id, category, imageUrl, description, moreInfo) => {
    return put(host + endpoints.byId(id), { category, imageUrl, description, moreInfo });
}

export const deleteFact = (factId) => {
    return del(host + endpoints.byId(factId));
}

export const likeFact = (factId) => {
    return post(host + endpoints.toLike, { factId });
}

export const getAllLikesForPost = (factId) => {
    return get(host + endpoints.allLikes(factId));
}


/**
 * A function that checks if a user has liked a certain fact
 * Returns Promise that resolves to a boolean
 * @param {string} factId the id of a current fact
 * @param {string} userId the id of the current user
 * @returns {Promise}
 */
export const hasUserLikedFact = async (factId, userId) => {
    const factLikesByCurrentUser = await get(host + endpoints.factLikesByUser(factId, userId));

    return factLikesByCurrentUser > 0;
}