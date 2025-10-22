import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../Data";
import { useSelector } from "react-redux";

const Category = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`text-center my-22 mb-35 transition-colors duration-300 ${
        theme === "dark"
          ? "text-gray-100 bg-gray-900"
          : "text-gray-900 bg-[#fdfaf6]"
      }`}
    >
      <h1 className="mb-6 text-4xl font-bold">Shop by Category</h1>
      <div className="flex flex-wrap justify-center gap-12">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
