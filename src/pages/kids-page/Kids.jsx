import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../Data";
import Filters from "../../components/category-feature/Filters";
import ProductList from "../../components/category-feature/ProductList";
import SortDropdown from "../../components/category-feature/SortDropdown";

const Kids = () => {
  const theme = useSelector((state) => state.theme.mode); // ✅ get theme
  const kidsProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === "kids"
  );
  const minPrice = Math.min(...kidsProducts.map((p) => p.price));
  const maxPrice = Math.max(...kidsProducts.map((p) => p.price));

  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(kidsProducts);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...kidsProducts];

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
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="mb-2 text-3xl font-bold">Kids Collection</h1>
      <p className="mb-8 text-gray-500">
        {filteredProducts.length} products in stock
      </p>
      <h2 className="mb-4 text-xl text-red-600">Filters</h2>

      {/* Mobile buttons */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`px-4 py-2 text-sm font-medium border rounded-lg ${
            theme === "dark"
              ? "text-white bg-gray-800 border-gray-700 hover:bg-gray-700"
              : "text-gray-700 bg-gray-100 border-gray-300 hover:bg-gray-200"
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
        {/* Filters column */}
        <div
          className={`w-full lg:w-1/5 ${
            isFiltersOpen ? "block mb-6" : "hidden"
          } lg:block`}
        >
          <div className="lg:sticky lg:top-20">
            <Filters
              selectedCategory="kids"
              onCategoryChange={() => {}}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              theme={theme} // ✅ pass theme if Filters supports it
            />
          </div>
        </div>

        {/* Products column */}
        <div className="flex flex-col flex-1 p-0 lg:p-4 lg:rounded-lg">
          {/* Desktop sort dropdown */}
          <div className="absolute justify-end hidden lg:flex -top-20 right-5">
            <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
          </div>
          <ProductList products={filteredProducts} theme={theme} />{" "}
          {/* pass theme if ProductList supports it */}
        </div>
      </div>
    </div>
  );
};

export default Kids;
