import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={category.link}>
      <div
        className="relative w-[480px] h-96  mt-4 bg-gradient-to-b from-gray-200 to-gray-600 rounded-md overflow-hidden flex flex-col justify-end p-4 text-white"
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        <h2 className="text-2xl font-bold">{category.name}</h2>
        <Link
          to={category.link}
          className="text-sm underline mt-1 hover:text-gray-300"
        >
          Explore Collection →
        </Link>
      </div>
    </Link>
  );
};

export default CategoryCard;
