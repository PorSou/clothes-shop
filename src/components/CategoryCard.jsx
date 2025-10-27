// src/components/CategoryCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryCard = ({ category }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`relative group w-full sm:w-[300px] md:w-[380px] lg:w-[400px] h-[450px] rounded-3xl shadow-md overflow-hidden border cursor-pointer
      ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700 text-gray-100"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 will-change-transform"
        />
      </div>

      {/* Sliding Background Overlay with Gradient */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[35%] transition-transform duration-500 transform
          ${
            theme === "dark"
              ? "translate-y-full group-hover:translate-y-0"
              : "translate-y-full group-hover:translate-y-0"
          }`}
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(to top, rgba(55,65,81,0.9), rgba(55,65,81,0.4))"
              : "linear-gradient(to top, rgba(253,250,246,0.9), rgba(253,250,246,0.4))",
        }}
      >
        {/* Text inside overlay */}
        <div className="flex flex-col items-center justify-center h-full px-6 py-4 text-center">
          <h2
            className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {category.name}
          </h2>
          <p
            className={`text-sm mb-3 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {category.description}
          </p>
          <Link
            to={category.link}
            className={`text-sm font-medium underline-offset-4 transition-colors duration-300 ${
              theme === "dark"
                ? "text-gray-200 hover:text-white"
                : "text-brown-700 hover:text-brown-900"
            }`}
          >
            Explore Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
