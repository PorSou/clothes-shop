import React from "react";
import { products } from "../../Data";
import ProductCard from "../../components/FeatureCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-[#fdfaf6] text-gray-800"
      }`}
    >
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h1
          className={`mb-4 text-3xl font-bold text-center md:mb-0 md:text-4xl transition-colors duration-300 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Featured Products
        </h1>
        <Link
          to="/shop"
          className={`flex items-center gap-1 px-3 py-1 font-medium transition-colors duration-300 cursor-pointer ${
            theme === "dark"
              ? "text-gray-200 hover:text-yellow-300 hover:bg-gray-800"
              : "text-gray-800 hover:bg-yellow-100 hover:text-amber-500"
          }`}
        >
          View All <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
