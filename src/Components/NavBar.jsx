import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Check if the current path matches the provided path
    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
                            OpenRoads.Com
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-white font-bold">
                        <Link 
                            to="/" 
                            className={`hover:text-blue-600 font-medium transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="Bookings/" 
                            className={`hover:text-blue-600 font-medium transition-colors ${isActive('/Bookings/') ? 'text-blue-400' : ''}`}
                        >
                            Bookings
                        </Link>
                        <Link 
                            to="CarListings/" 
                            className={`hover:text-blue-600 font-medium transition-colors ${isActive('/CarListings/') ? 'text-blue-400 ' : ''}`}
                        >
                            Listings
                        </Link>
                        <Link 
                            to="About/" 
                            className={`hover:text-blue-600 font-medium transition-colors ${isActive('/About/') ? 'text-blue-400 ' : ''}`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <Link 
                            to="/Authentication"
                            className={`inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm ${
                                isActive('/Authentication') ? 'bg-blue-500' : ''
                            }`}
                        >
                            <LogIn className="w-4 h-4" />
                            <span>Login</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className={`block px-3 py-2 rounded-md text-white hover:text-blue-600 font-medium transition-colors ${
                                    isActive('/') ? 'text-blue-400  ' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="Bookings/"
                                className={`block px-3 py-2 rounded-md text-white hover:text-blue-600 font-medium transition-colors ${
                                    isActive('/Bookings/') ? 'text-blue-400  ' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                Bookings
                            </Link>
                            <Link
                                to="CarListings/"
                                className={`block px-3 py-2 rounded-md text-white hover:text-blue-600 font-medium transition-colors ${
                                    isActive('/CarListings/') ? 'text-blue-400  ' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                Listings
                            </Link>
                            <Link
                                to="About/"
                                className={`block px-3 py-2 rounded-md text-white hover:text-blue-600 font-medium transition-colors ${
                                    isActive('/About/') ? 'text-blue-400  ' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                            <Link
                                to="/Authentication"
                                className={`block px-3 py-2 rounded-md text-white hover:text-blue-600 font-medium transition-colors ${
                                    isActive('/Authentication') ? 'text-blue-400  ' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                <div className="flex items-center gap-2">
                                    <LogIn className="w-4 h-4" />
                                    <span>Login</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
