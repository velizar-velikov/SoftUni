import { Post } from '../types/post.js';
import api from './api.js';


const host = 'http://localhost:3030';

interface PostsEndpoints {
    allPosts: string;
    posts: string;
    postById(id: string): string;
    postsByUser(userId: string): string;
}

const endpoints: PostsEndpoints = {
    allPosts: '/data/posts?sortBy=_createdOn%20desc',
    posts: '/data/posts',
    postById: (id: string): string => `/data/posts/${id}`,
    postsByUser: (userId: string): string => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

// generic interface
interface PostServiceType<T> {
    getAll(): Promise<T[]>;
    getPostsByUser(userId: string): Promise<T[]>;
    getById(postId: string): Promise<T>;
    addPost(data: T): Promise<T>;
    editPost(postId: string, data: T): Promise<T>;
    deletePost(postId: string): Promise<T>
}

// using the generic interface
class PostService implements PostServiceType<Post> {
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

export default new PostService();