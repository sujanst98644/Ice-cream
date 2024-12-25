import React from 'react';

const Cart = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-5 text-black">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 flex">
                {/* Cart Items Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">Home/cart</h2>

                    {/* Cart Item */}
                    <div className="mt-6 flex items-start">
                        {/* Placeholder for Image */}
                        <div className="bg-gray-200 w-24 h-32 rounded"></div>

                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">CHOCOBAR</h3>
                            <p className="text-sm text-gray-500">Chocolate cover with vanilla chocolate Bliss</p>
                            <p className="text-md font-semibold mt-2">MRP: ₹ 12.00</p>
                            
                            {/* Quantity Selector */}
                            <div className="flex items-center mt-4">
                                <label htmlFor="quantity" className="mr-3">Quantity:</label>
                                <select
                                    id="quantity"
                                    className="border rounded-md p-1"
                                >
                                    {[...Array(10)].map((_, index) => (
                                        <option key={index} value={index + 1}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Remove button */}
                        <button className="text-red-500 hover:underline ml-4">Remove</button>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="w-1/3 ml-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Summary</h3>
                        <div className="mt-4">
                            <p className="text-lg">Subtotal: <span className="font-semibold">$120.00</span></p>
                            <p className="text-sm text-gray-500">Estimated Delivery & Handling: Free</p>
                            <p className="text-xl font-semibold mt-2">Total: $120.00</p>
                        </div>
                        <button className="bg-black text-white px-6 py-2 rounded-md mt-4 w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

            {/* Favourites Section */}
            <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold">Favourites</h2>
                <p className="text-sm text-gray-500 mt-2">There are no items saved to your favourites.</p>

                {/* You Might Also Like Section */}
                <h3 className="text-md font-semibold mt-6">You Might Also Like</h3>

                <div className="flex mt-4 items-start">
                    {/* Placeholder for Ice Cream Image */}
                    <div className="bg-gray-200 w-32 h-32 rounded"></div>

                    <div className="ml-4">
                        <h4 className="text-md font-semibold">Vanilla with walnut flavor</h4>
                        <p className="text-md font-semibold mt-2">MRP: ₹ 12,295.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
