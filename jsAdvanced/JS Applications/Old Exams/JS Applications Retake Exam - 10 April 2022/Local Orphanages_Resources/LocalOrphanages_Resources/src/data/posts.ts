import { ApiService } from './api.js';

const api = new ApiService();

const host = 'http://localhost:3030';

export type Post = {
    title: string;
    description: string;
    address: string;
    phone: string;
    imageUrl: string;
    _ownerId?: string;
    _createdOn?: number;
    _id?: string;
};

const endpoints = {
    allPosts: '/data/posts?sortBy=_createdOn%20desc',
    posts: '/data/posts',
    postById: (id: string): string => `/data/posts/${id}`,
    postsByUser: (userId: string): string => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export class PostService {
    async getAll(): Promise<Post[]> {
        return await api.get(host + endpoints.allPosts);
    }

    async getPostsByUser(userId: string): Promise<Post[]> {
        return await api.get(host + endpoints.postsByUser(userId));
    }

    async getById(postId: string): Promise<Post> {
        return await api.get(host + endpoints.postById(postId));
    }

    async addPost(data: Post): Promise<Post> {
        return await api.post(host + endpoints.posts, data);
    }

    async editPost(postId: string, data: Post): Promise<Post> {
        return await api.put(host + endpoints.postById(postId), data);
    }

    async deletePost(postId: string) {
        return await api.delete(host + endpoints.postById(postId));
    }
}
