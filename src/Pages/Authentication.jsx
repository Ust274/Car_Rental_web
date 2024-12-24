import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

function Authentication() {
    const [islogin, setIsLogin] = useState(true);
    const Navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, SetFormData] = useState({
        email: '',
        password: ''

    });
    const[error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const{id, value} = e.target;
        SetFormData(prev => ({ 
                ...prev,
                [id]: value
            }));
            setError('');
    }

    const handleClick= () => {
        Navigate('/');
    };
  


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        const endpoint = islogin ? '/api/login' : '/api/signup';
        console.log('Attempting fetch to:', `http://localhost:3000${endpoint}`);
        console.log('With data:', formData);
    
        try {
            const response = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            console.log('Response received:', data);
    
            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }
    
            localStorage.setItem('token', data.token);
            console.log("Success:", data);

            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 3000);

        } catch (error) {
            console.error('Detailed error:', {
                message: error.message,
                stack: error.stack
            });
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {islogin ? 'Login' : 'Sign Up'}
                </h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Processing...' : (islogin ? 'Sign In' : 'Sign Up')}
                        </button>
                        
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setIsLogin(!islogin)}
                                className="text-blue-500 hover:text-blue-800 text-sm font-bold"
                            >
                                {islogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {showMessage && (
                <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-green-500 text-white text-center">
                    Successfully logged in!
                </div>
            )}

            {showMessage && (
                <div  onClick={handleClick} className="fixed p-2 top-40 bg-blue-500 text-white text-center rounded">
                    Get back to the home page
                </div>
            )}


            
        </div>
    );
}

export default Authentication;