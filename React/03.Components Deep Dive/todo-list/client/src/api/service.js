import { get, post, put } from './request.js';

const BASE_URL = 'http://localhost:3030/jsonstore';

const endpoints = {
    all: '/todos',
    byId: (id) => `/todos/${id}`,
};

export async function getAll() {
    return get(BASE_URL + endpoints.all);
}

export async function getById(id) {
    return get(BASE_URL + endpoints.byId(id));
}

export async function createTodo(task) {
    return post(BASE_URL + endpoints.all, { task, isCompleted: false });
}

export async function updateTodo(id, isCompleted) {
    return put(BASE_URL + endpoints.byId(id), { isCompleted });
}
