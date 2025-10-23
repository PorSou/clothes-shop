import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";

const Checkout = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const theme = useSelector((state) => state.theme.mode);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 10.0 : 0.0;
  const total = subtotal + shipping;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    });

    Swal.fire({
      title: "Order Placed ✅",
      text: `Your order of $${total.toFixed(2)} has been placed successfully!`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-stone-50 text-gray-900"
      }`}
    >
      {/* Main scrollable content */}
      <div className="px-6 py-10 pb-40 overflow-y-auto">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-3xl font-bold">Checkout</h1>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Shipping Info */}
            <div
              className={`p-8 border rounded-lg shadow-sm h-fit lg:col-span-2 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2 className="mb-6 text-lg font-semibold">
                Shipping Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Keep all shipping fields as you sent */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                        : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                        : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
                      }`}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div
              className={`p-6 border rounded-lg shadow-sm flex flex-col justify-between max-h-[80vh] overflow-y-auto scrollbar-hide transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2 className="mb-6 text-lg font-semibold">Order Summary</h2>

              {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between pb-4 border-b border-gray-300"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-16 h-20 rounded-md"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-4 text-sm">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between mb-6 text-lg font-semibold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className={`w-full py-3 rounded-md font-semibold transition cursor-pointer ${
                  theme === "dark"
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
