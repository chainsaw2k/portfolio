import ArrowUpRightIcon from "@heroicons/react/24/solid/ArrowUpRightIcon";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
}

function BlogList({ posts }: Props) {
    return (
        <div>
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold leading-tight dark:text-white"> The <span className="text-teal-500">Blog</span> </h1>
                        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-teal-200">
                            </div>
                            <div className="flex-1 h-2 bg-teal-400">
                            </div>
                            <div className="flex-1 h-2 bg-teal-600">
                            </div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-500">Thoughts and experiences on product development.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16pb-24">
                {posts.map((post) => (
                    <ClientSideRoute route={`/post/${post.slug.current}`}>
                        <div key={post._id} className="flex flex-col group cursor-pointer">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>
                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                        {post.categories.map((category) =>
                                        (
                                            <div className="text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 flex-1">
                                <p className="underline text-lg font-bold">{post.title}</p>
                                <p className="text-gray-500">{post.description}</p>
                            </div>

                            <p className="mt-5 font-bold flex items-center group-hover:underline">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );
}

export default BlogList;