import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import { productsData } from './components/data'; // Updated Path

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  // Filter Logic
  let filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sort Logic
  if (sortOrder === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'rating-desc') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-12">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 mt-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Products</h2>
          <p className="text-gray-500 mt-3 text-lg">Find the best deals on your favorite items.</p>
        </div>

        <FilterBar 
          setSearchTerm={setSearchTerm} 
          setCategory={setCategory} 
          setSortOrder={setSortOrder} 
        />
        
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default App;