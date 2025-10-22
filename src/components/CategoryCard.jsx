import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryCard = ({ category }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <Link to={category.link}>
      <div
        className={`relative w-[300px] md:w-[400px] lg:w-[480px] h-64 md:h-96 mt-4 rounded-md overflow-hidden flex flex-col justify-end p-4 transition-transform hover:scale-105`}
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        {/* Overlay */}
        <div
          className={`relative z-10 p-4 -m-4 backdrop-blur-sm transition-colors duration-300 ${
            theme === "dark" ? "bg-black/50 text-white" : "bg-black/30 text-white"
          }`}
        >
          <h2 className="text-xl font-bold transition-colors duration-300 md:text-2xl">
            {category.name}
          </h2>
          <span className="inline-block mt-1 text-sm underline transition-colors duration-300 hover:text-gray-300">
            Explore Collection →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
