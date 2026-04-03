import React from 'react';

const FilterBar = ({ setSearchTerm, setCategory, setSortOrder }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center border border-gray-200 mb-8">
      
      <input 
        type="text" 
        placeholder="Search products by name..." 
        className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <select 
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
        </select>

        <select 
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort By: Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>

    </div>
  );
};

export default FilterBar;