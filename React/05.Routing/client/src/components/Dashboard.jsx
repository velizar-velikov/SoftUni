import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
            const result = await response.json();
            const data = Object.values(result);
            setPosts(data);
        }
        getPosts();
    }, []);

    return (
        <div className="flex-grow bg-white mb-12 py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn more about programming with our users' posts</p>
                </div>
                <div className="mx-auto mt-6 mb-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <Link
                                    to={`/details/${post.id}`}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.title}
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <Link to={`/details/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.body.slice(0, 150) + '...'}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
