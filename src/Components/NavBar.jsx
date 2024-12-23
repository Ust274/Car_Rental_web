import React from 'react';
import { Link } from 'react-router-dom'; 
import { LogIn } from 'lucide-react';



const NavBar = () => {
    return (
        <nav className='sticky-top bg-gray-100'>
            <div className="flex justify-between items-center p-2 ">
                <div className="font-bold text-4xl text-blue-600">
                    <Link to="/">OpenRoads.com</Link>
                </div>
                <Link to="/Authentication" className="flex items-center gap-2 bg-blue-600 text-white rounded p-2 text-m font-semibold hover:bg-blue-700 transition duration-200">
                        <LogIn />
                        <span>Login</span>
                </Link>

            </div>
            <ul className="list-none flex justify-end space-x-4 align-middle p-4 bg-gray-200 font-bold">
                <li className="hover:text-blue-600 transition duration-200">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-600 transition duration-200">
                    <Link to="Bookings/">Bookings</Link>
                </li>
                <li className="hover:text-blue-600 transition duration-200" >
                    <Link to="CarListings/">Listings</Link>
                </li>
                <li className="hover:text-blue-600 transition duration-200">
                    <Link to="About/">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;