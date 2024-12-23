import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to our car rental service! We are dedicated to providing you with the best rental experience possible. Our fleet of vehicles is well-maintained and ready to take you wherever you need to go.
                </p>
                <p className="text-gray-700 mb-4">
                    Our mission is to offer reliable and affordable car rental services to our customers. Whether you need a car for a day, a week, or longer, we have a variety of options to suit your needs.
                </p>
                <p className="text-gray-700">
                    Thank you for choosing our service. We look forward to serving you!
                </p>
            </div>
        </div>
    );
};

export default About;