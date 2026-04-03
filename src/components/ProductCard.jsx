import React from 'react';

const ProductCard = ({ product }) => {
  
  const handleAddToCart = () => {
    console.log(`Item Added to Cart: ${product.name}`);
    alert(`"${product.name}" added! Check console log.`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-52 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
        
        <div className="flex justify-between items-center mb-5 mt-auto">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="bg-green-100 text-green-800 text-sm font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
            ⭐ {product.rating}
          </span>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;