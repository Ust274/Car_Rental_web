import React from 'react';
import CarCard from '../Components/CarCard';
import Bangalore from '../assets/Images/Bangalore.webp';
import Chennai from '../assets/Images/Chennai.webp';
import Kolkata from '../assets/Images/Kolkata.webp';
import Jaipur from '../assets/Images/Jaipur.webp';
import { Car, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const Navigate = useNavigate();
    const cities = [
        { name: 'Bangalore', image: Bangalore },
        { name: 'Chennai', image: Chennai },
        { name: 'Kolkata', image: Kolkata },
        { name: 'Jaipur', image: Jaipur }
    ];

    const handleclick = () => { 
        Navigate('/Bookings');
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Drive Your Dreams Today!
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
                        From compact cars for solo adventures to spacious SUVs for family trips, 
                        we've got a car for every need.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex items-center shadow-lg">
                        <Search className="w-6 h-6 text-gray-400 ml-2" />
                        <input 
                            type="text" 
                            placeholder="Search for your perfect car..."
                            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Vehicle Selection Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <Car className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-800">
                        Wide Selection of Vehicles
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded">
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
            </div>

            {/* Cities Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <MapPin className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Services throughout India
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cities.map((city, index) => (
                            <div 
                                key={city.name}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img 
                                        src={city.image} 
                                        alt={city.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-xl font-bold text-white">
                                            {city.name}
                                        </p>
                                        <p className="text-sm text-gray-200 mt-2">
                                            Explore cars in {city.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: '24/7 Support', desc: 'Round-the-clock customer service' },
                        { title: 'Free Cancellation', desc: 'Flexible booking options' },
                        { title: 'Best Prices', desc: 'Competitive rates guaranteed' }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
                    {/* Testimonials Section */}
                    <div className="bg-blue-50 py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center justify-center gap-3 mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    What Our Customers Say
                                </h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { name: 'John Doe', feedback: 'Great service and friendly staff!', rating: 5 },
                                    { name: 'Jane Smith', feedback: 'The car was in excellent condition.', rating: 4 },
                                    { name: 'Sam Wilson', feedback: 'Affordable prices and easy booking process.', rating: 5 }
                                ].map((testimonial, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                        <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                                        <p className="text-gray-800 font-bold">{testimonial.name}</p>
                                        <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}     
                    <div className="bg-blue-800 text-white py-16">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold mb-6">
                                Ready to Drive?
                            </h2>
                            <p className="text-lg mb-8">
                                Book your car now and start your adventure today!
                            </p>
                            <button onClick={handleclick} className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
        </div>
    );
};

export default Home;