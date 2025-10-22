import React from "react";
import { useSelector } from "react-redux";

const MarqueeBar = () => {
  const theme = useSelector((state) => state.theme.mode);

  const items = [
    {
      icon: "✨",
      text: "Free Shipping on Orders Over $100",
      color: "text-purple-600",
    },
    {
      icon: "⭐",
      text: "New Spring Collection Now Available",
      color: "text-pink-600",
    },
    {
      icon: "🚚",
      text: "Fast Delivery in 2-3 Business Days",
      color: "text-green-600",
    },
    { icon: "🛡️", text: "30-Day Money Back Guarantee", color: "text-blue-600" },
  ];

  // CSS keyframes defined inline
  const marqueeStyle = {
    animation: "marqueeScroll 25s linear infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
        `}
      </style>

      <div
        className={`relative flex py-3 mt-10 overflow-hidden border-y marquee-container ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        {/* Fading edges */}
        <div
          className={`absolute top-0 left-0 z-10 w-16 h-full pointer-events-none ${
            theme === "dark"
              ? "bg-gradient-to-r from-gray-800 to-transparent"
              : "bg-gradient-to-r from-gray-50 to-transparent"
          }`}
        />
        <div
          className={`absolute top-0 right-0 z-10 w-16 h-full pointer-events-none ${
            theme === "dark"
              ? "bg-gradient-to-l from-gray-800 to-transparent"
              : "bg-gradient-to-l from-gray-50 to-transparent"
          }`}
        />

        {/* Looping content */}
        <div
          className="flex marquee-content whitespace-nowrap"
          style={marqueeStyle}
        >
          {/* Original items */}
          <div className="flex items-center gap-16 px-8">
            {items.map((item, index) => (
              <span
                key={`original-${index}`}
                className={`flex items-center gap-2 text-lg font-medium ${
                  theme === "dark" ? "text-white" : item.color
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>

          {/* Duplicate items for seamless scrolling */}
          <div className="flex items-center gap-16 px-8" aria-hidden="true">
            {items.map((item, index) => (
              <span
                key={`duplicate-${index}`}
                className={`flex items-center gap-2 text-lg font-medium ${
                  theme === "dark" ? "text-white" : item.color
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeBar;
