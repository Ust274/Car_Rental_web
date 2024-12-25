import React from 'react';
import base from '../assets/Images/base.png';
import lambo from '../assets/Images/lambo.webp';
import Bmw from '../assets/Images/Bmw.jpg';
import RR from '../assets/Images/RR.webp';
import Ferrari from '../assets/Images/Ferrari.jpg';
import Aston from '../assets/Images/Aston.jpg';
import audiR8 from '../assets/Images/AudiR8.webp';
import porsche911 from '../assets/Images/porsche911.jpg';
import mclaren720 from '../assets/Images/mclaren720.jpg';
import tesla from '../assets/Images/tesla.jpg';
import fordMustang from '../assets/Images/fordMustang.jpg';
import chevroletcorvette from '../assets/Images/chevroletcorvette.jpg';

import { Car, Search } from 'lucide-react';
import CarCard from '../Components/CarCard';

const CarListings = () => {
    const cars = [
        { name: 'Mercedes', imageUrl: base, type: 'Sedan' },
        { name: 'Lamborghini', imageUrl: lambo, type: 'LUX' },
        { name: 'BMW', imageUrl: Bmw, type: 'SUV' },
        { name: 'Rolls Royce', imageUrl: RR, type: 'SUV' },
        { name: 'Ferrari', imageUrl: Ferrari, type: 'LUX' },
        { name: 'Aston Martin', imageUrl: Aston, type: 'LUX' },
        { name: 'Audi R8', imageUrl: audiR8, type: 'LUX' },
        { name: 'Porsche 911', imageUrl: porsche911, type: 'LUX' },
        { name: 'McLaren 720S', imageUrl: mclaren720, type: 'LUX' },
        { name: 'Tesla Model S', imageUrl: tesla, type: 'SUV' },
        { name: 'Ford Mustang', imageUrl: fordMustang, type: 'SUV' },
        { name: 'Chevrolet Corvette', imageUrl: chevroletcorvette, type: 'LUX' },
      ];
      

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
                    {cars.map((car, index) => (
                        <CarCard key={index} name={car.name} imageUrl={car.imageUrl} type={car.type} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CarListings;
<q></q>