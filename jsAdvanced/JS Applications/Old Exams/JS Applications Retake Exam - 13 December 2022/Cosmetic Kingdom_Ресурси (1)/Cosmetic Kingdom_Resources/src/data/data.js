import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allProducts: '/data/products?sortBy=_createdOn%20desc',
    products: '/data/products',
    productById: (id) => `/data/products/${id}`,
    addBuy: '/data/bought',
    totalBoughtForProduct: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    totalBoughtForProductByUser: (productId, userId) =>
        `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

/**
 * gets all products
 * @returns {Promise<Object>}
 */
export const getAllProducts = async () => {
    return await get(host + endpoints.allProducts);
};

/**
 * returns a product by his id
 * @param {String} productId
 * @returns {Promise<Object>}
 */
export const getProductById = async (productId) => {
    return await get(host + endpoints.productById(productId));
};

/**
 * creates a product
 * @param {Product} data
 * @returns {Promise<Object>}
 */
export const createProduct = async (data) => {
    return await post(host + endpoints.products, data);
};

/**
 * edits a product
 * @param {Product} data
 * @param {String} productId
 * @returns {Promise<Object>}
 */
export const editProduct = async (productId, data) => {
    return await put(host + endpoints.productById(productId), data);
};

/**
 * deletes a product
 * @param {String} productId
 * @returns {Promise<Object>}
 */
export const deleteProduct = async (productId) => {
    return await del(host + endpoints.productById(productId));
};

/**
 *
 * @param {String} productId
 * @returns {Promise<Number>}
 */
export const getTotalBuysForProduct = async (productId) => {
    return await get(host + endpoints.totalBoughtForProduct(productId));
};

/**
 * adds a product
 * @param {{projectId: String}} data
 * @returns {Promise<Object>}
 */
export const addBuy = async (data) => {
    return await post(host + endpoints.addBuy, data);
};

/**
 *
 * @param {String} productId
 * @param {String} userId
 * @returns {Promise<Boolean>}
 */
export const hasUserBoughtProduct = async (productId, userId) => {
    // return either 0 or 1
    const res = await get(host + endpoints.totalBoughtForProductByUser(productId, userId));

    return Boolean(res);
};

/**
 * @typedef {Object} Product
 * @property {String} name
 * @property { String } imageUrl
 * @property { String } category
 * @property { String } description
 * @property { String } price
 */
