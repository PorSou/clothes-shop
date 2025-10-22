// src/pages/women-page/Women.jsx
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../Data";
import Filters from "../../components/category-feature/Filters";
import ProductList from "../../components/category-feature/ProductList";
import SortDropdown from "../../components/category-feature/SortDropdown";

const Women = () => {
  const theme = useSelector((state) => state.theme.mode); // get theme
  const womenProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === "women"
  );
  const minPrice = Math.min(...womenProducts.map((p) => p.price));
  const maxPrice = Math.max(...womenProducts.map((p) => p.price));

  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(womenProducts);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // for mobile toggle

  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...womenProducts];

    if (selectedColor !== "all") {
      filtered = filtered.filter(
        (p) => p.color.toLowerCase() === selectedColor.toLowerCase()
      );
    }
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOrder === "lowToHigh") filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === "highToLow") filtered.sort((a, b) => b.price - a.price);

    setFilteredProducts(filtered);
  }, [selectedColor, priceRange, sortOrder]);

  return (
    <div
      className={`min-h-screen px-4 py-10 sm:px-8 md:px-10 lg:px-80 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#fdfaf5] text-gray-900"
      }`}
    >
      <h1 className="mb-2 text-3xl font-bold">Women's Collection</h1>
      <p
        className={`mb-8 ${
          theme === "dark" ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {filteredProducts.length} products in stock
      </p>
      <h2 className="text-xl text-red-600">Filters</h2>

      {/* Mobile buttons */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-200 ${
            theme === "dark"
              ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
              : "bg-gray-100 text-gray-700 border-gray-300"
          }`}
        >
          {isFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
        <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      {/* Main layout */}
      <div
        className="flex flex-col lg:flex-row lg:relative lg:gap-14"
        ref={containerRef}
      >
        {/* Filters section */}
        <div
          className={`w-full lg:w-1/5 ${
            isFiltersOpen ? "block mb-6" : "hidden"
          } lg:block`}
        >
          <div className="lg:sticky lg:top-20">
            <Filters
              selectedCategory={"women"}
              onCategoryChange={() => {}}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>
        </div>

        {/* Product list section */}
        <div
          className={`flex flex-col flex-1 p-0 lg:p-4 lg:rounded-lg ${
            theme === "dark" ? "bg-gray-800" : ""
          }`}
        >
          {/* Desktop dropdown */}
          <div className="absolute justify-end hidden mb-4 lg:flex -top-20 right-5">
            <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
          </div>

          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Women;
