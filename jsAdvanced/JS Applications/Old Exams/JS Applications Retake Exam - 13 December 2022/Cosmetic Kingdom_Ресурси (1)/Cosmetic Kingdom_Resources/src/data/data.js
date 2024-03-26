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

export const getAllProducts = async () => {
    return await get(host + endpoints.allProducts);
};

export const getProductById = async (productId) => {
    return await get(host + endpoints.productById(productId));
};

export const createProduct = async (data) => {
    return await post(host + endpoints.products, data);
};

export const editProduct = async (productId, data) => {
    return await put(host + endpoints.productById(productId), data);
};

export const deleteProduct = async (productId) => {
    return await del(host + endpoints.productById(productId));
};

export const getTotalBuysForProduct = async (productId) => {
    return await get(host + endpoints.totalBoughtForProduct(productId));
};

export const addBuy = async (data) => {
    return await post(host + endpoints.addBuy, data);
};

export const hasUserBoughtProduct = async (productId, userId) => {
    // return either 0 or 1
    const res = await get(host + endpoints.totalBoughtForProductByUser(productId, userId));

    return Boolean(res);
};
