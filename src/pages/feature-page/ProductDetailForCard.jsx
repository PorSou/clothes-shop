import React, { useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { productFea } from "../../Data";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../features/favorite/favoriteSlice";

const ProductDetailForCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = productFea.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(product?.isFavorite || false);

  if (!product) {
    return <div className="py-20 text-xl text-center">Product not found.</div>;
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(
        addToFavorite({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          category: product.category,
        })
      );
    } else {
      dispatch(removeFromFavorite(product.id));
    }
  };

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
        quantity,
      })
    );

    Swal.fire({
      title: "Added to Cart 🛒",
      text: `${quantity} × ${product.name} added successfully!`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });

    setQuantity(1);
  };

  return (
    <div className="flex flex-col min-h-screen gap-12 px-6 py-12 text-gray-900 bg-white md:flex-row">
      {/* LEFT: IMAGE */}
      <div className="relative flex justify-center md:w-1/2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div className="md:w-1/2">
        <p className="mb-2 tracking-widest text-gray-600 uppercase">
          {product.category}
        </p>
        <h1 className="mb-3 text-3xl font-semibold">{product.name}</h1>
        <p className="mb-6 text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <p className="mb-6 text-gray-600">{product.description}</p>

        {/* Size */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold">Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md transition ${
                  selectedSize === size
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                } hover:scale-105`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold">Color</h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((clr) => (
              <button
                key={clr}
                onClick={() => setSelectedColor(clr)}
                className={`px-4 py-2 border rounded-md transition ${
                  selectedColor === clr
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                } hover:scale-105`}
              >
                {clr}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold">Quantity</h3>
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
            className="flex-1 px-8 py-3 font-medium text-white bg-gray-900 border rounded-md hover:bg-gray-800"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={handleFavorite}
            className="flex items-center justify-center w-12 h-12 border rounded-md hover:bg-gray-100"
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
          <h3 className="mb-3 font-semibold">Product Details</h3>
          <ul className="space-y-1 text-gray-700 list-disc list-inside">
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

export default ProductDetailForCard;
