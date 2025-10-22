import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const token = useSelector((state) => state.auth.token);
  const theme = useSelector((state) => state.theme.mode);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleQuantityChange = (id, type) =>
    dispatch(updateQuantity({ id, type }));
  const handleCheckout = () => {
    if (!token)
      navigate("/login", { state: { from: { pathname: "/checkout" } } });
    else navigate("/checkout");
  };

  return (
    <div
      className={`px-4 py-8 mb-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-stone-50 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div
            className={`p-8 text-center rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800 text-gray-100 border border-gray-700"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
          >
            <p className="mb-4 text-lg">Your cart is empty</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 text-white transition bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-6 p-6 rounded-lg shadow-sm transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-24 h-24 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="mt-2 text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      disabled={item.quantity === 1}
                      className="text-gray-600 transition hover:text-gray-800"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 font-semibold text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="text-gray-600 transition hover:text-gray-800"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-red-500 transition hover:text-red-700"
                    title="Remove from cart"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div
              className={`sticky p-6 rounded-lg shadow-sm transition-colors duration-300 top-24 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>
              <div className="mb-6 space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 text-xl font-bold border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-3 mb-3 font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="block p-2 font-medium text-center transition rounded-md hover:bg-gray-200 hover:text-gray-900"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
