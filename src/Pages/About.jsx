import React from 'react';
import { Car, CheckCircle, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl">
                <div className="flex items-center mb-6">
                    <Car className="text-blue-500 mr-4" size={48} />
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Welcome to our car rental service! We are dedicated to providing you with the best rental experience possible. 
                    Our fleet of vehicles is well-maintained and ready to take you wherever you need to go.
                </p>
                <div className="flex items-start mb-6">
                    <CheckCircle className="text-green-500 mr-3" size={32} />
                    <p className="text-gray-600 leading-relaxed">
                        <strong>Our Mission:</strong> To offer reliable and affordable car rental services to our customers. Whether you 
                        need a car for a day, a week, or longer, we have a variety of options to suit your needs.
                    </p>
                </div>
                <div className="flex items-start">
                    <Heart className="text-red-500 mr-3" size={32} />
                    <p className="text-gray-600 leading-relaxed">
                        Thank you for choosing our service. We look forward to serving you and making your journey enjoyable and 
                        hassle-free!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
