import React, { useState, useEffect, useRef } from "react";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../Data";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";

const Category = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // Auto-rotate center card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`text-center my-22 mb-35 transition-colors duration-300 ${
        theme === "dark"
          ? "text-gray-100 bg-gray-900"
          : "text-gray-900 bg-[#fdfaf6]"
      }`}
    >
      <h1 className="mb-6 text-4xl font-bold">Shop by Category</h1>
      <div className="relative flex flex-wrap justify-center w-full gap-8">
        {categories.map((category, index) => {
          let offset = index - centerIndex;
          if (index === 0 && centerIndex === categories.length - 1) offset = -1;
          if (index === categories.length - 1 && centerIndex === 0) offset = 1;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }} // slide up from below
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: offset === 0 ? 0 : offset * 12,
                scale: offset === 0 ? 1 : 0.88,
                zIndex: offset === 0 ? 10 : 5,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8, // slightly slower for scroll
                ease: "easeOut",
                delay: index * 0.2, // stagger for nice entrance
              }}
            >
              <CategoryCard category={category} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
