import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../features/favorite/favoriteSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.items);
  const theme = useSelector((state) => state.theme.mode);

  const isFav = favorites.some((fav) => fav.id === product.id);

  const handleFavorite = () => {
    if (isFav) dispatch(removeFromFavorite(product.id));
    else dispatch(addToFavorite(product));
  };

  return (
    <div
      className={`flex w-full transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-200"
      } rounded-lg shadow-md hover:shadow-lg relative`}
    >
      <Link to={`/shop/${product.id}`} className="w-full">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          <p className="font-semibold text-gray-500">{product.category}</p>
          <p className="text-sm text-gray-400 capitalize">{product.color}</p>
          <p className="font-medium text-gray-400">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={handleFavorite}
        className="absolute flex items-center justify-center w-8 h-8 text-xl transition-colors bg-white rounded-full top-2 right-2 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700"
      >
        {isFav ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};

export default ProductCard;
