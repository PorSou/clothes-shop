import React, { useEffect, useState, useRef } from "react";
import { allProducts } from "../../Data";
import Filters from "../../components/category-feature/Filters";
import ProductList from "../../components/category-feature/ProductList";
import SortDropdown from "../../components/category-feature/SortDropdown";
import { useSelector } from "react-redux";

const Men = ({ search }) => {
  const theme = useSelector((state) => state.theme.mode);

  const menProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === "men"
  );

  const initialPrices =
    menProducts.length > 0
      ? {
          min: Math.min(...menProducts.map((p) => p.price)),
          max: Math.max(...menProducts.map((p) => p.price)),
        }
      : { min: 0, max: 1000 };

  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([
    initialPrices.min,
    initialPrices.max,
  ]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(menProducts);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...menProducts];

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
  }, [selectedColor, priceRange, sortOrder, search]);

  return (
    <div
      className={`min-h-screen px-4 lg:px-10 2xl:px-80 py-10 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-[#fdfaf6] text-gray-900"
      }`}
    >
      {/* Mobile controls */}
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
      <div className="flex flex-col lg:flex-row lg:gap-8" ref={containerRef}>
        <div className="flex flex-col">
          <h1 className="mb-2 text-3xl font-bold">Men’s Collection</h1>
          <p
            className={`mb-8 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {filteredProducts.length} products in stock
          </p>

          {/* Filters column */}
          <div
            className={`w-full lg:w-1/5 ${
              isFiltersOpen ? "block mb-6" : "hidden"
            } lg:block`}
          >
            <div className="lg:sticky lg:top-20">
              <Filters
                selectedCategory="men"
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* Products column */}
        <div className="flex flex-col flex-1 p-0 lg:p-4 lg:rounded-lg">
          <div className="justify-end hidden lg:flex">
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

export default Men;
