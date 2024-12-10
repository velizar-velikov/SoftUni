import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            The best developer blog is finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This blog will provide you with all the articles you will ever need to start your programming journey
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <Link
                                to="/dashboard"
                                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Go to Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
