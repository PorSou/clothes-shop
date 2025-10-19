import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../Data";

const Category = () => {
  return (
    <div className="text-center my-22 mb-35 ">
      <h1 className="text-4xl font-bold mb-6">Shop by Category</h1>
      <div className="flex justify-center gap-12 flex-wrap ">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
