import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Authentication() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id.toLowerCase()]: value
        }));
        setError('');
    };

    const handleClick = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        const endpoint = isLogin ? '/login' : '/signup';
        console.log('Attempting fetch to:', `http://localhost:3000${endpoint}`);
        
        const payload = {
            username: formData.username,
            password: formData.password
        };
        
        console.log('With data:', payload);
    
        try {
            const response = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', 
                body: JSON.stringify(payload),
            });
            
            const data = await response.json();
            console.log('Response received:', data);
    
            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }
    
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                console.log("Success:", data);

                setShowMessage(true);
                
                // Show success pop-up message for login/signup
                setTimeout(() => {
                    setShowMessage(false);
                    navigate('/'); // Navigate to home page
                }, 2000);
            }

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
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            required
                            minLength={3}
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
                            minLength={5}
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                        </button>
                        
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-500 hover:text-blue-800 text-sm font-bold"
                            >
                                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            {/* Success message pop-up */}
            {showMessage && (
                <div className="fixed bottom-0 inset-x-0 p-4 bg-green-500 text-white text-center">
                    Successfully {isLogin ? 'logged in' : 'signed up'}!
                </div>
            )}
        </div>
    );
}

export default Authentication;
