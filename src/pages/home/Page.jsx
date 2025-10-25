import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const images = [
    "https://i.pinimg.com/1200x/10/96/49/1096493f27a9c9c5f48179fd587a21ee.jpg",
    "https://i.pinimg.com/1200x/50/a3/91/50a391fe3814679a70f2aebcad23e0a4.jpg",
    "https://i.pinimg.com/1200x/d3/ca/42/d3ca421da1c213e90891f00c75a5c8db.jpg",
    "https://i.pinimg.com/1200x/0c/2a/74/0c2a742394261f39665d0dab43e9d13e.jpg",
    "https://i.pinimg.com/1200x/a5/f9/ac/a5f9ac670b9d812ff8149aa31e4922d2.jpg",
    "https://i.pinimg.com/1200x/85/80/a4/8580a4878b0eb13f2bfcd46fccb74e29.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 py-12 text-center lg:items-start sm:px-12 lg:px-16 lg:text-left">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Where Style Meets You — Cloth Shop
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="max-w-3xl mb-6 text-base text-white sm:text-lg md:text-xl lg:text-2xl"
          style={{ lineHeight: 1.4 }}
        >
          Trendy outfits for every occasion. Comfortable, stylish, and crafted
          to make you stand out.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <Link to="/shop">
            <button className="flex items-center gap-3 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-all duration-300 bg-transparent border-2 border-white cursor-pointer group hover:bg-white hover:text-gray-900">
              <span className="relative inline-flex items-center space-x-2 transition-transform duration-300 h-7 group-hover:translate-x-1">
                <span className="absolute flex items-center h-full text-white -left-3">
                  |
                </span>
                <span>Shop Now</span>
              </span>

              <span className="inline-block transition-transform duration-300 ease-out transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
