import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="divide-y border-gray-200 border-b bg-red-600">
            <div className="px-4 py-3 md:py-6 lg:px-6">
                <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
                    <Link href="/" className="text-2xl font-bold tracking-tighter mr-4 text-white">
                        Rits Language Exchange
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm">
                        <Link
                            className="font-medium text-white transition-colors hover:text-gray-200"
                            href="https://chatgpt.com/"
                        >
                            Home
                        </Link>
                        <Link
                            className="font-medium text-white transition-colors hover:text-gray-200"
                            href="https://www.canva.com/"
                        >
                            About
                        </Link>
                        <Link
                            className="bg-white py-2 px-4 text-red-600 rounded-md font-medium transition-colors hover:bg-gray-200"
                            href="/bbs-posts/create"
                        >
                            Create Post
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;