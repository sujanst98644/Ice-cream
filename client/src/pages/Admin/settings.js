import React, { useState } from 'react';

const AdminSettings = () => {
    const [theme, setTheme] = useState('light');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Settings updated:', { theme, email, password});
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Theme:</label>
                        <select 
                            value={theme} 
                            onChange={handleThemeChange} 
                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSettings;