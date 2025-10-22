import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const theme = useSelector((state) => state.theme.mode); // 'light' or 'dark'
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-500";

  if (products.length === 0)
    return <p className={`${textColor}`}>No products match your filters.</p>;

  // FIX: Added md:grid-cols-3 for medium tablets, allowing 3 columns when
  // the filter sidebar is hidden (below lg:).
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
