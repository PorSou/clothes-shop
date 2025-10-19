import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product, onToggleFavorite }) => {
  const [isFav, setIsFav] = useState(product.isFavorite);

  const handleFavorite = () => {
    setIsFav(!isFav);
    if (onToggleFavorite) onToggleFavorite(product.id);
  };

  return (
    <div className="flex">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 w-full sm:w-[300px] md:w-[350px] lg:w-[380px] relative">
        {/* IMAGE */}
        <div className="h-64 sm:h-72 md:h-80 lg:h-[390px] overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Favorite Icon with gray circle background */}
          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-300 text-xl transition-colors"
          >
            {isFav ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>

        {/* PRODUCT INFO */}
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
          <p className="font-semibold text-gray-600">{product.category}</p>
          <p className="text-sm text-gray-500 capitalize">{product.color}</p>
          <p className="text-gray-400 font-medium">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
