import React from "react";
import { products } from "../../Data";
import ProductCard from "../../components/FeatureCard";

const FeaturedProducts = () => {
  return (
    <div className="bg-[#fdfaf6] py-10 px-6 w-[90%] m-auto">
      <h1 className="text-3xl ml-10 mt-7 md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Featured Products
      </h1>
      <div className="flex ml-10 justify-center">
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
