import React from "react";
import { Range, getTrackBackground } from "react-range";
import { useSelector } from "react-redux";

const Filters = ({
  selectedCategory,
  onCategoryChange,
  selectedColor,
  onColorChange,
  priceRange,
  onPriceChange,
}) => {
  const theme = useSelector((state) => state.theme.mode); // 'light' or 'dark'
  const categories = ["all Products", "men", "women", "kids"];
  const colors = [
    "black",
    "white",
    "blue",
    "red",
    "green",
    "yellow",
    "pink",
    "gray",
    "brown",
  ];

  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;

  // Theme classes
  const bgClass =
    theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div
      // w-[300px] removed to make it responsive to its parent container (lg:w-1/5 or w-full)
      className={`p-5 mb-6 space-y-6 w-72  shadow-md rounded-5lg ${bgClass} ${borderClass}`}
    >
      {/* CATEGORY */}
      <div className="w-full">
        <h3 className="mb-3 font-semibold">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`py-2 px-3 rounded border font-medium text-left ${
                selectedCategory === cat
                  ? "bg-[#322d22] text-white border-[#322d22]"
                  : `${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div>
        <h3 className="mb-3 font-semibold">Color</h3>
        <div className="grid grid-cols-5 gap-2">
          <button
            onClick={() => onColorChange("all")}
            className={`py-1 px-2 border rounded text-sm font-medium ${
              selectedColor === "all"
                ? "bg-gray-800 text-white border-gray-800"
                : `${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                      : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                  }`
            }`}
          >
            All
          </button>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`w-full h-6 rounded border ${
                selectedColor === color ? "border-gray-800" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              title={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          ))}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div>
        <h3 className="mb-3 font-semibold">Price Range</h3>
        <div className="flex flex-col gap-4">
          <Range
            step={STEP}
            min={MIN}
            max={MAX}
            values={priceRange}
            onChange={onPriceChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  background: getTrackBackground({
                    values: priceRange,
                    colors: ["#322d22", "#ccc", "#322d22"],
                    min: MIN,
                    max: MAX,
                  }),
                  borderRadius: "4px",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-white border border-gray-500 rounded-full shadow"
              />
            )}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
