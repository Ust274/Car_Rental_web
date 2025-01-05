import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const Navigation = useNavigate();

  const HandleNavigation = () => {
    Navigation("/NotFoundPage")

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(e.target.value)
    console.log('Payment submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Details
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span></span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Tax</span>
              <span>{}</span>
            </div>
            <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>{}</span>
            </div>
          </div>

          {/* Card Number */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">Card Number</label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength="19"
              />
              <CreditCard className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Card Holder */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">Card Holder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium">Expiry Date</label>
              <div className="relative">
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength="5"
                />
                <Calendar className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium">CVV</label>
              <div className="relative">
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full p-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength="3"
                />
                <Lock className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit" onClick={HandleNavigation}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Pay Rupees
          </button>

          {/* Security Notice */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Your payment information is encrypted and secure
          </p>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;