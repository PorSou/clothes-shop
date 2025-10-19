import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-stone-200 min-h-[700px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-800 mb-6 tracking-tight">
          Discover Your Style
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Explore our curated collection of premium fashion pieces designed for
          the modern individual with many powerfull style
        </p>

        {/* Buttons Container */}
        <div className="flex justify-center space-x-4">
          <Link to="/shop">
            <button
              className="group relative cursor-pointer overflow-hidden px-6 py-3 bg-gray-800 text-stone-50 text-sm uppercase tracking-wider font-medium hover:bg-gray-700 transition duration-300 shadow-lg"
              aria-label="Shop Now"
            >
              {/* The main text */}
              <span className="inline-block mr-1">Shop Now</span>
              {/* The arrow with hover effect */}
              <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-red-500 ">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
