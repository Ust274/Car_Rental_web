import React, { useState } from 'react';
import { Calendar, Car, CreditCard, MapPin, Package, User, Phone } from 'lucide-react';

const BookingForm = () => {
    const [estimate,setEstimate] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        carType: '',
        packageType: '',
        startDestination: '',
        endDestination: '',
        startDate: '',
        endDate: '',
        paymentMode: ''
    });

    // const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Successfully booked!');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateEstimate = () => {
        if(formData.carType === 'sedan'){
            const restimate = Math.floor(Math.random() * 1000);
            setEstimate(1000 + restimate)
        }
        if(formData.carType === 'suv'){
            const restimate = Math.floor(Math.random() * 1000);
            setEstimate(2000 + restimate)
        }
        if(formData.carType === 'hatchback'){
            const restimate = Math.floor(Math.random() * 1000);
            setEstimate(1500 + restimate)
        }
        if(formData.carType==='luxury'){
            const restimate = Math.floor(Math.random() * 1000);
            setEstimate(3500 + restimate)
        }

    }


    return (
        <div className="min-h-screen bg-blue-500 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600">
                    <Car className="w-6 h-6" />
                    Choose Your Ride
                </h1>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <User className="w-4 h-4" />
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <Phone className="w-4 h-4" />
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <Car className="w-4 h-4" />
                            Car Type
                        </label>
                        <select
                            name="carType"
                            value={formData.carType}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Car Type</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="hatchback">Hatchback</option>
                            <option value="luxury">LUX</option>
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <Package className="w-4 h-4" />
                            Package Type
                        </label>
                        <select
                            name="packageType"
                            value={formData.packageType}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Package Type</option>
                            <option value="normal">Normal</option>
                            <option value="premium">Premium</option>
                            <option value="lux">Luxury</option>
                            <option value="outstation">OutStation</option>
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            Start Location
                        </label>
                        <input
                            type="text"
                            name="startDestination"
                            value={formData.startDestination}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter pickup location"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            End Location
                        </label>
                        <input
                            type="text"
                            name="endDestination"
                            value={formData.endDestination}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter drop-off location"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            Start Date
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            End Date
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                            <CreditCard className="w-4 h-4" />
                            Payment Mode
                        </label>
                        <select
                            name="paymentMode"
                            value={formData.paymentMode}
                            onChange={handleChange}
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Payment Mode</option>
                            <option value="credit">Credit Card</option>
                            <option value="debit">Debit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>
                </form>

                <div className="mt-6 bg-white p-4 rounded-lg border border-blue-300">
                    <h2 className="text-lg font-medium text-blue-600">Estimated Price</h2>
                    <p className="mt-2">
                        <span className="text-2xl font-semibold">₹ {estimate}</span> for the selected ride
                        <span className='font-thin text-xs'> + Booking Price : 250</span>
                    </p>
                </div>

                <button onClick={calculateEstimate}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Estimate
                </button>
            </div>
            {/* {message && ( <div className="mt-4 bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
                {message}
                </div> )} */}
        </div>
    );
};

export default BookingForm;