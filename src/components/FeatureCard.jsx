import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className=" bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 w-[90%] h-[600px]">
      <div className="relative h-[80%] py-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-6 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
          <FaHeart
            className={`${
              product.isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="p-4 h-[20%] flex flex-col justify-center">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
