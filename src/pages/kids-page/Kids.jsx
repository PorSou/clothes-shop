import React, { useEffect, useState, useRef } from "react";
import { allProducts } from "../../Data";
import Filters from "../../components/category-feature/Filters";
import ProductList from "../../components/category-feature/ProductList";
import SortDropdown from "../../components/category-feature/SortDropdown";

const Kids = () => {
  const kidsProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === "kids"
  );
  const minPrice = Math.min(...kidsProducts.map((p) => p.price));
  const maxPrice = Math.max(...kidsProducts.map((p) => p.price));

  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(kidsProducts);

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
    <div className="min-h-screen px-80 py-10">
      <h1 className="text-3xl font-bold mb-2">Kids Collection</h1>
      <p className="text-gray-500 mb-8">
        {filteredProducts.length} products in stock
      </p>
      <h2 className="text-xl text-red-600">Filters</h2>

      <div className="flex gap-8 relative" ref={containerRef}>
        <div className="w-1/5">
          <div className="sticky top-20">
            <Filters
              selectedCategory={"kids"} // fixed
              onCategoryChange={() => {}}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg flex flex-col">
          <div className="mb-4 flex justify-end absolute -top-20 right-5">
            <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
          </div>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Kids;
