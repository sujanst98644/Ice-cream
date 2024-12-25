import React, { useState } from "react";

const Flavors = () => {
  const [flavors, setFlavors] = useState([
    { name: "Vanilla", category: "Classic", size: "100ml" },
    { name: "Chocolate", category: "Classic", size: "200ml" },
    { name: "Strawberry", category: "Fruit", size: "500ml" },
    { name: "Mango", category: "Fruit", size: "1000ml" },
    { name: "Mint Chocolate Chip", category: "Special", size: "500ml" },
    // Add more flavors as needed
  ]);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleSizeFilterChange = (e) => {
    setSizeFilter(e.target.value);
  };

  const filteredFlavors = flavors
    .filter((flavor) =>
      flavor.name.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((flavor) => sizeFilter === "" || flavor.size === sizeFilter)
    .sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-4 w-full text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Filter & Sort</h2>
            <input
              type="text"
              placeholder="Filter by name"
              value={filter}
              onChange={handleFilterChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <select
              value={sort}
              onChange={handleSortChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
            </select>
            <select
              value={sizeFilter}
              onChange={handleSizeFilterChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Filter by size</option>
              <option value="100ml">100ml</option>
              <option value="200ml">200ml</option>
              <option value="500ml">500ml</option>
              <option value="1000ml">1000ml</option>
            </select>
          </div>
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFlavors.map((flavor, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{flavor.name}</h3>
                <p className="text-gray-600">{flavor.category}</p>
                <p className="text-gray-600">{flavor.size}</p>
              </div>
            ))}
          </div>
        </div>
        <footer className="mt-8 text-center text-gray-600">
          <p>&copy; 2023 Ice Cream Factory</p>
        </footer>
      </div>
    </div>
  );
};

export default Flavors;
