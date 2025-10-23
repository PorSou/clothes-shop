import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const theme = useSelector((state) => state.theme.mode);
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-500";

  if (products.length === 0)
    return <p className={`${textColor}`}>No products match your filters.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
