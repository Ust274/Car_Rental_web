import React from 'react';
import merce from '../assets/Images/merce.jpeg';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, DollarSign, Info, User, MessageSquare } from 'lucide-react';

const CarDetails = () => {
  const Navigate = useNavigate();
  const image = merce;
  const handleclick = () => { 
    Navigate('/Bookings');
}
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Mercedes-Benz S-Class</h1>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-lg">4.56 (128 reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={image}
              alt="car"
              className="w-full h-[800px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Car Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Type</span>
                </div>
                <p className="text-gray-600">Sedan</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Number</span>
                </div>
                <p className="text-gray-600">KA-01-XX-XXXX</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-gray-600">₹5000/day</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Info className="w-5 h-5" />
                  <span className="font-semibold">Status</span>
                </div>
                <p className="text-gray-600">Available</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">About this car</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury redefined with our Mercedes-Benz S-Class. 
                Featuring state-of-the-art technology, premium leather interiors, 
                and a smooth powerful engine, this vehicle offers the perfect 
                blend of comfort and performance.
              </p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Reviews
              </h2>
              
              <div className="space-y-4">
                {[1, 2, 3].map((review, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gray-100 p-2 rounded-full">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-600">4.5</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Amazing car! Very comfortable and luxurious. The service was excellent.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Now Button */}
            <button onClick={handleclick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;