import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-800 border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
                            OpenRoads.Com
                        </Link>
                    </div>
                    
                    <div className="hidden md:flex space-x-8 text-white font-bold">
                        <Link to="/" className="hover:text-blue-600 font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="Bookings/" className="hover:text-blue-600 font-medium transition-colors">
                            Bookings
                        </Link>
                        <Link to="CarListings/" className="hover:text-blue-600 font-medium transition-colors">
                            Listings
                        </Link>
                        <Link to="About/" className="hover:text-blue-600 font-medium transition-colors">
                            About
                        </Link>
                    </div>

                    <Link 
                        to="/Authentication"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        <LogIn className="w-4 h-4" />
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;