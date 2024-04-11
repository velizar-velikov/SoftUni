import api from './api.js';
const host = 'http://localhost:3030';
const endpoints = {
    allPosts: '/data/posts?sortBy=_createdOn%20desc',
    posts: '/data/posts',
    postById: (id) => `/data/posts/${id}`,
    postsByUser: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};
// using the generic interface
class PostService {
    async getAll() {
        return await api.get(host + endpoints.allPosts);
    }
    async getPostsByUser(userId) {
        return await api.get(host + endpoints.postsByUser(userId));
    }
    async getById(postId) {
        return await api.get(host + endpoints.postById(postId));
    }
    async addPost(data) {
        return await api.post(host + endpoints.posts, data);
    }
    async editPost(postId, data) {
        return await api.put(host + endpoints.postById(postId), data);
    }
    async deletePost(postId) {
        return await api.delete(host + endpoints.postById(postId));
    }
}
export default new PostService();
