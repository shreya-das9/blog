import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout, isAdmin } = useAuth();

    return (
        <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-bold text-cyan-400">BlogSystem</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-cyan-400"
                            >
                                Home
                            </Link>
                            <Link
                                to="/blogs"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-cyan-400"
                            >
                                Blogs
                            </Link>
                            {user && (
                                <Link
                                    to="/my-blogs"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-cyan-400"
                                >
                                    My Blogs
                                </Link>
                            )}
                            {isAdmin && (
                                <Link
                                    to="/admin"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-cyan-400"
                                >
                                    Admin
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/create-blog"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-cyan-400 hover:bg-cyan-500"
                                >
                                    Create Post
                                </Link>
                                <Link
                                    to="/profile"
                                    className="text-gray-300 hover:text-cyan-400"
                                >
                                    {user.username}
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-gray-300 hover:text-cyan-400"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:text-cyan-400"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-cyan-400 hover:bg-cyan-500"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
