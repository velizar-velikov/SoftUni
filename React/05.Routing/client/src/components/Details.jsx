import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useParams, Outlet } from 'react-router-dom';

export default function Details() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`http://localhost:3030/jsonstore/blog/posts/${id}`);
            const data = await response.json();
            console.log(data);

            setPost(data);
        }
        getPost();
    }, []);

    return (
        <div className="flex-grow mx-10 md:mx-24 my-10 max-w-4xl">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900">{`Details for post: ${post.title}`}</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Title</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{post.title}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Content</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{post.body}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Links</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="ml-4 shrink-0">
                                <Link to={`comments`} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Comments
                                </Link>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
            <Outlet />
        </div>
    );
}
