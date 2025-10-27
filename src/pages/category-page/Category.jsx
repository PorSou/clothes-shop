import React, { useEffect } from "react";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../Data";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const theme = useSelector((state) => state.theme.mode);

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of each animation
      delay: 200, // Set delay between animations (global delay)
      once: true, // Animation will run only once
    });
  }, []);

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-[#fdfaf6] text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="px-6 text-center mb-14">
        <h1
          className={`mb-4 font-serif text-4xl font-bold md:text-5xl ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Shop by Category
        </h1>
        <p
          className={`max-w-3xl mx-auto text-base leading-relaxed md:text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Browse our carefully curated collections designed for every member of
          your family. From sophisticated men's wear to elegant women's fashion
          and playful kids' styles, find the perfect pieces that match your
          unique taste and lifestyle.
        </p>
      </div>

      {/* Category Cards */}
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="cursor-pointer"
            data-aos="zoom-out-up"
            data-aos-delay={index * 200} // Add a staggered delay based on index
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
