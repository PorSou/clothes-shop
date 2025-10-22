import React, { useEffect, useState, useRef } from "react";
import { allProducts } from "../../Data";
import Filters from "../../components/category-feature/Filters";
import ProductList from "../../components/category-feature/ProductList";
import SortDropdown from "../../components/category-feature/SortDropdown";
import { useSelector } from "react-redux";

const Shop = ({ search }) => {
  const theme = useSelector((state) => state.theme.mode);

  const initialPrices =
    allProducts.length > 0
      ? {
          min: Math.min(...allProducts.map((p) => p.price)),
          max: Math.max(...allProducts.map((p) => p.price)),
        }
      : { min: 0, max: 1000 };

  const [selectedCategory, setSelectedCategory] = useState("all Products");
  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([
    initialPrices.min,
    initialPrices.max,
  ]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedCategory !== "all Products") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
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

    if (search) {
      const match = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      const rest = filtered.filter(
        (p) => !p.name.toLowerCase().includes(search.toLowerCase())
      );
      filtered = [...match, ...rest];
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, priceRange, sortOrder, search]);

  return (
    <div
      className={`min-h-screen px-4 py-10 sm:px-8 md:px-10 lg:px-80 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-[#fdfaf6] text-gray-900"
      }`}
    >
      <h1 className="mb-2 text-3xl font-bold">Shop Collection</h1>
      <p
        className={`mb-8 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {filteredProducts.length} products in stock
      </p>
      <h2 className="text-xl text-red-600">Filters</h2>

      {/* Mobile controls: shown below lg: */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "text-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700"
              : "text-gray-700 bg-gray-100 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {isFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
        <SortDropdown
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          theme={theme}
        />
      </div>

      {/* Main layout */}
      <div
        className="flex flex-col lg:flex-row lg:gap-14" // Correctly uses flex-row on lg: and stacks on mobile/tablet
        ref={containerRef}
      >
        {/* Filters column */}
        <div
          className={`w-full lg:w-1/5 ${
            // lg:w-1/5 applies only on desktop
            isFiltersOpen ? "block mb-6" : "hidden"
          } lg:block`}
        >
          <div className="lg:sticky lg:top-20">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              theme={theme}
            />
          </div>
        </div>

        {/* Products column */}
        <div className="flex flex-col flex-1 p-0 lg:p-4 lg:rounded-lg">
          {/* Sort dropdown (desktop) - Shown above lg: */}
          <div className="justify-end hidden mb-4 lg:flex">
            <SortDropdown
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
              theme={theme}
            />
          </div>

          <ProductList products={filteredProducts} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
