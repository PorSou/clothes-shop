import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Sample product
const sampleProduct = {
  id: 1,
  name: "T-Shirt",
  price: 20,
};

const ProductCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="border p-4 w-64">
      <h3>{sampleProduct.name}</h3>
      <p>price: ${sampleProduct.price}</p>
      <button
        onClick={() => dispatch(sampleProduct)}
        className="g-blue-500 text-black px-3 py-1 rounded mt-2"
      >
        Add To Cart
      </button>
      <p>Cart items: {cartItems.length}</p>
    </div>
  );
};

export default ProductCard;
