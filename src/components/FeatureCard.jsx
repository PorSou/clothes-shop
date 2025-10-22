import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/home/${product.id}`}
      className="flex items-center justify-center w-full"
    >
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[365px] h-[400px] md:h-[500px] lg:h-[510px] cursor-pointer bg-gray-50 text-gray-800">
        <div className="relative h-[75%] md:h-[80%] py-3 md:py-5">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          <button className="absolute p-2 transition-colors bg-white rounded-full top-4 md:top-6 right-2 md:right-3 hover:bg-gray-100">
            <FaHeart
              className={`text-sm md:text-base ${
                product.isFavorite ? "text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <div className="p-3 md:p-4 h-[25%] md:h-[20%] flex flex-col justify-center">
          <h3 className="text-sm font-semibold truncate md:text-base">
            {product.name}
          </h3>
          <p className="text-xs truncate md:text-sm">{product.category}</p>
          <p className="mt-1 text-base font-bold md:mt-2 md:text-lg">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
