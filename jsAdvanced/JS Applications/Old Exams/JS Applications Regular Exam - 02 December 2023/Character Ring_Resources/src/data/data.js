import { del, get, post, put } from "./api.js";

const host = 'http://localhost:3030';

const endpoints = {
    getAll: `/data/characters?sortBy=_createdOn%20desc`,
    create: '/data/characters',
    ById: (id) => `/data/characters/${id}`,
    addLike: `/data/useful`,
    allLikesForChar: (id) => `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`,
    likedByUser: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export const getAllCharacters = () => {
    return get(host + endpoints.getAll);
}

export const createCharacter = (category, imageUrl, description, moreInfo) => {
    return post(host + endpoints.create, { category, imageUrl, description, moreInfo });
}

export const updateCharacter = (id, category, imageUrl, description, moreInfo) => {
    return put(host + endpoints.ById(id), { category, imageUrl, description, moreInfo });
}

export const deleteCharacter = (id) => {
    return del(host + endpoints.ById(id));
}

export const getCharacterById = (id) => {
    return get(host + endpoints.ById(id));
}

export const getAllLikesById = (id) => {
    return get(host + endpoints.allLikesForChar(id));
}

export const likeCharacter = (characterId) => {
    return post(host + endpoints.addLike, { characterId });
}

export const hasUserLikedCharacter = async (characterId, userId) => {

    const likesByUserForCharacter = await get(host + endpoints.likedByUser(characterId, userId));
    //if 0 likes => falsy
    //else > 0 => truthy
    return Boolean(likesByUserForCharacter);
}
