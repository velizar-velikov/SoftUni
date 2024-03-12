import { del, get, post, put } from "./api.js";

/**
 * Data module
 * @module data
 */

/**
 * Host to make requests for facts
 * @type {String}
 */
const host = 'http://localhost:3030';

/**
 * Endpoints to make requests for facts
 * @type {{
 * all: String,
 * create: String,
 * byId: Function,
 * toLike: String,
 * allLikes: Function,
 * factLikesByUser: Function
 * }}
 */
const endpoints = {
    all: '/data/facts?sortBy=_createdOn%20desc',
    create: '/data/facts',
    /**
     * Takes a fact id and returns the endpoint for that fact
     * @param {String} factId id of a fact
     * @returns {String} endpoint for the said fact
     */
    byId: (factId) => `/data/facts/${factId}`,
    toLike: '/data/likes',
    allLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    factLikesByUser: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

/**
 * Returns facts array of objects as a promise
 * @returns {Promise}
 */
export const getFacts = () => {
    return get(host + endpoints.all);
}

/**
 * Takes a fact id and returns a fact object as a promise
 * @param {String} factId fact id
 * @returns {Promise}
 */
export const getFactById = (factId) => {
    return get(host + endpoints.byId(factId));
}

/**
 * Sends a request to create a fact with given properties
 * @param {String} category fact category
 * @param {String} imageUrl fact image
 * @param {String} description fact description
 * @param {String} moreInfo fact more info
 * @returns {Promise}
 */
export const createFact = (category, imageUrl, description, moreInfo) => {
    return post(host + endpoints.create, { category, imageUrl, description, moreInfo });
}

/**
 * Sends a request to update a fact
 * @param {String} category fact category
 * @param {String} imageUrl fact image
 * @param {String} description fact description
 * @param {String} moreInfo fact more info
 * @returns {Promise}
 */
export const updateFact = (id, category, imageUrl, description, moreInfo) => {
    return put(host + endpoints.byId(id), { category, imageUrl, description, moreInfo });
}

/**
 * Sends a request to delete a fact with said id
 * @param {String} factId fact id
 * @returns {Promise}
 */
export const deleteFact = (factId) => {
    return del(host + endpoints.byId(factId));
}

/**
 * Sends a request to like a fact with said id
 * @param {String} factId fact id
 * @returns {Promise}
 */
export const likeFact = (factId) => {
    return post(host + endpoints.toLike, { factId });
}

/**
 * Gets all likes for a post with said id
 * @param {String} factId fact id
 * @returns {Promise}
 */
export const getAllLikesForPost = (factId) => {
    return get(host + endpoints.allLikes(factId));
}


/**
 * A function that checks if a user has liked a certain fact.
 * @param {string} factId the id of a current fact
 * @param {string} userId the id of the current user
 * @returns {Promise} promise that resolves to boolean
 */
export const hasUserLikedFact = async (factId, userId) => {
    const factLikesByCurrentUser = await get(host + endpoints.factLikesByUser(factId, userId));

    return factLikesByCurrentUser > 0;
}