import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from the server
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin - Users</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">User ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Profile</th>
                        <th className="py-2 px-4 border-b">Products Bought</th>
                        <th className="py-2 px-4 border-b">Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <div className="flex items-center">
                                    <img src={user.profilePicture} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                                    <span>{user.profile}</span>
                                </div>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    {user.productsBought.map(product => (
                                        <li key={product.id}>{product.name}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    {user.reviews.map(review => (
                                        <li key={review.id}>{review.text}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsersPage;