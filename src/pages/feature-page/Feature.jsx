import React, { useEffect } from "react";
import { products } from "../../Data";
import ProductCard from "../../components/FeatureCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos"; // Import AOS for animation
import "aos/dist/aos.css"; // Import AOS styles

const FeaturedProducts = () => {
  const theme = useSelector((state) => state.theme.mode);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animations will run only once when scrolling into view
    });
  }, []);

  return (
    <div
      className={`py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-800"
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
        {products.map((product, idx) => (
          <div
            key={product.id}
            data-aos="fade-right" // Apply fade-right animation
            data-aos-delay={idx * 200} // Stagger animation delay
            data-aos-offset="200" // Trigger animation when the element is 200px into the viewport
          >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
