// ============================================
// UPDATED: ProductDetail.jsx
// ============================================
// Enhanced version with improved SweetAlert UX and clean structure

import Swal from "sweetalert2";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../features/favorite/favoriteSlice";
import { productDetails } from "../../Data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = productDetails.find((p) => p.id === parseInt(id));
  const favorites = useSelector((state) => state.favorite.items);
  const isFavorite = favorites.some((fav) => fav.id === product?.id);

  // States
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || "N/A"
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "Default"
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="py-20 text-xl text-center">
        Loading product details...
      </div>
    );
  }

  // Handle Favorites
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(product.id));
    } else {
      dispatch(
        addToFavorite({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          category: product.category,
        })
      );
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;
    dispatch(
      addToCart({
        id: cartItemId,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        category: product.category,
        quantity: quantity,
      })
    );

    // SweetAlert Success Notification
    Swal.fire({
      title: "Added to Cart 🛒",
      text: `${quantity} x ${product.name} added successfully!`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });

    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] px-6 md:px-16 py-12 flex flex-col md:flex-row justify-end gap-12">
      {/* LEFT: IMAGE */}
      <div className="flex justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div className="md:w-1/2">
        <p className="mb-2 tracking-widest text-gray-500 uppercase">
          {product.category}
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">
          {product.name}
        </h1>
        <p className="mb-6 text-2xl font-semibold text-gray-800">
          ${product.price.toFixed(2)}
        </p>
        <p className="mb-6 text-gray-600">{product.description}</p>

        {/* Size */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-gray-800">Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes?.length ? (
              product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))
            ) : (
              <span className="text-gray-500">No size options</span>
            )}
          </div>
        </div>

        {/* Color */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-gray-800">Color</h3>
          <div className="flex flex-wrap gap-2">
            {product.colors?.length ? (
              product.colors.map((clr) => (
                <button
                  key={clr}
                  onClick={() => setSelectedColor(clr)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === clr
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {clr}
                </button>
              ))
            ) : (
              <span className="text-gray-500">No color options</span>
            )}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-gray-800">Quantity</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-lg border rounded-md"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-lg border rounded-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart & Favorite */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleAddToCart}
            className="flex-1 px-8 py-3 font-medium text-white transition bg-gray-900 border border-gray-300 rounded-md hover:bg-gray-800"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={handleFavorite}
            className="flex items-center justify-center w-12 h-12 transition border border-gray-300 rounded-md hover:bg-gray-100"
          >
            {isFavorite ? (
              <FaHeart className="text-xl text-red-500" />
            ) : (
              <FaRegHeart className="text-xl text-gray-600" />
            )}
          </button>
        </div>

        {/* Product Details */}
        <div className="mt-10">
          <h3 className="mb-3 font-semibold text-gray-800">Product Details</h3>
          <ul className="space-y-1 text-gray-600 list-disc list-inside">
            <li>Premium quality materials</li>
            <li>Comfortable fit</li>
            <li>Easy care instructions</li>
            <li>Available in multiple sizes and colors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
