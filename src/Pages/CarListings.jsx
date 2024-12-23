import React from 'react';
import { Car, Search } from 'lucide-react';
import CarCard from '../Components/CarCard';

const CarListings = () => {
    const k = 100;

    return (
        <>
            {/* Header Section */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="flex flex-col items-center text-center">
                    <Car className="h-12 w-12 mb-2" />
                    <h1 className="text-3xl font-bold">Explore Our Car Listings</h1>
                    <p className="text-sm font-light mt-2">
                        Browse our collection of cars and find the one that fits your journey.
                    </p>
                </div>
                {/* Search Bar */}
                <div className="flex justify-center mt-6">
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Search for cars..."
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="absolute right-2 top-2 text-blue-600">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Car Listings */}
            <div className="p-6 bg-gray-100 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded">
                    {Array.from({ length: k }, (_, index) => (
                        <CarCard key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CarListings;
<q></q>