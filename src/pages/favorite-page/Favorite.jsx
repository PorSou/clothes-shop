// src/pages/favorite-page/Favorite.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorite,
  clearFavorites,
} from "../../features/favorite/favoriteSlice";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { items } = useSelector((state) => state.favorite);
  const theme = useSelector((state) => state.theme.mode); // get theme from Redux
  const dispatch = useDispatch();

  // Empty favorites
  if (items.length === 0) {
    return (
      <div
        className={`flex flex-col mb-100 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-grow px-4 mt-20 text-center">
          <p className="mb-4 text-lg">❤️ Your favorites list is empty.</p>
          <Link
            to="/shop"
            className={`px-6 py-3 text-white transition rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Discover Products
          </Link>
        </div>
      </div>
    );
  }

  // Favorites list
  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex-grow w-full max-w-6xl px-6 py-12 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Your Favorites
          </h1>
          <button
            onClick={() => dispatch(clearFavorites())}
            className={`px-4 py-2 text-sm text-white transition rounded ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 transition border rounded-lg shadow hover:shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-56 mb-4 rounded-md"
                />
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  ${item.price.toFixed(2)}
                </p>
              </Link>
              <button
                onClick={() => dispatch(removeFromFavorite(item.id))}
                className={`w-full px-4 py-2 mt-3 text-sm text-white transition rounded ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
