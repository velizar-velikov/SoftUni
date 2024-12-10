export default function About() {
    return (
        <div className="flex-grow py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Developers' Blog</h2>
                        <p className="mt-6 text-gray-600">
                            This blog is made to enhance your learning experience, connect with other programmers and share your
                            personal knowledge on popular topics. Here you will find everything you need for achieving your goals
                            as a programmer, and if you cannot find such a topic present, do not hesitate to register and upload
                            your own article on an interesting topic!
                        </p>
                        <p className="mt-4 text-gray-600">
                            {' '}
                            Register now to become part of one the fastest growing developers platforms on the internet
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
