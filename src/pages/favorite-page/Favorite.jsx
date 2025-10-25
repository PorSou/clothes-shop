import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorite,
  clearFavorites,
} from "../../features/favorite/favoriteSlice";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Favorite = () => {
  const { items } = useSelector((state) => state.favorite);
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-stone-50 text-gray-900"
      }`}
    >
      {/* Scrollable content */}
      <div
        className="px-6 py-12 mx-auto overflow-y-auto max-w-7xl"
        style={{ paddingBottom: "6rem", maxHeight: "calc(100vh - 6rem)" }}
      >
        {/* Header (no sticky) */}
        <div className="flex items-center justify-between mb-6 bg-inherit">
          <h1 className="text-3xl font-bold">
            {items.length > 0
              ? "Your Favorites"
              : "❤️ Your favorites list is empty"}
          </h1>
          {items.length > 0 && (
            <button
              onClick={() => dispatch(clearFavorites())}
              className={`px-4 py-2 text-sm text-white transition rounded ${
                theme === "dark"
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-red-600 hover:bg-red-500"
              }`}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
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
        )}

        {/* Favorite cards */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col gap-6 p-6 rounded-lg shadow-sm transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-300"
                }`}
              >
                <Link to={`/product/${item.id}`} className="w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-64 rounded-md"
                  />
                </Link>
                <div className="flex flex-col items-start justify-between flex-1">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      ${item.price.toFixed(2)}
                    </p>
                  </Link>
                  <button
                    onClick={() => dispatch(removeFromFavorite(item.id))}
                    className={`px-4 py-2 mt-3 text-sm text-white transition rounded ${
                      theme === "dark"
                        ? "bg-red-600 hover:bg-red-500"
                        : "bg-red-600 hover:bg-red-500"
                    }`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer responsive sticky/fixed */}
      <div
        className={`w-full ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-stone-50 text-gray-900"
        }`}
      >
        {/* Fixed footer for tablet & desktop */}
        <div className="fixed bottom-0 left-0 z-50 hidden w-full md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
