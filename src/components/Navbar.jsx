import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">X-Max E-Shop</h1>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-blue-200 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-blue-200 cursor-pointer transition-colors">Products</li>
          <li className="hover:text-blue-200 cursor-pointer transition-colors">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;