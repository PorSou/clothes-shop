import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const images = [
    "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg",
    "https://m.foolcdn.com/media/dubs/original_images/clothing_hanging_on_a_rack_in_a_store_fashion_retail_apparel_clothes.jpg",
    "https://millstonenews.com/wp-content/uploads/2023/06/Jeans.jpg",
    "https://c8.alamy.com/comp/P9DJB5/woman-clothes-set-casual-jeans-shirt-t-shirt-on-stone-background-fashion-beauty-background-top-view-copy-space-P9DJB5.jpg",
    "https://makersrow.com/wp-content/uploads/2025/04/fast-fashion-vs-slow-sustainable-fashion-1024x683.webp",
    "https://www.efulfillmentservice.com/wp-content/uploads/2023/12/Apparel.jpg",
    "https://www.orfonline.org/public/uploads/posts/image/img-fashion-apparel.jpg",
    "https://m.foolcdn.com/media/dubs/original_images/clothing_hanging_on_a_rack_in_a_store_fashion_retail_apparel_clothes.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
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
        <h1
          className="mb-4 font-extrabold leading-tight text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          Discover Your Style
        </h1>
        <p
          className="max-w-3xl mb-6 text-base text-white sm:text-lg md:text-xl lg:text-2xl"
          style={{ lineHeight: 1.4 }}
        >
          Trendy outfits for every occasion. Comfortable, stylish, and crafted
          to make you stand out.
        </p>
        <Link to="/shop">
          <button className="flex items-center gap-3 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-all duration-300 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 group">
            <span className="inline-block pr-3 border-r-2 border-white">
              Shop Now
            </span>
            <span className="inline-block transition-transform duration-300 ease-out transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
