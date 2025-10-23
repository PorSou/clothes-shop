import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { updateProfileImage } from "../../features/auth/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState(user?.image || "");

  if (!user) {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-screen text-center ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-[#f9f6ef] text-gray-900"
        }`}
      >
        <h2 className="mb-4 text-2xl font-semibold">You are not logged in.</h2>
        <Link
          to="/login"
          className="px-4 py-2 text-white transition-all bg-red-600 rounded-lg hover:bg-red-700"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // Save to Redux
      dispatch(updateProfileImage(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#f9f6ef] text-gray-900"
      }`}
    >
      {/* Scrollable content */}
      <div className="flex-1 max-w-3xl px-4 py-10 mx-auto overflow-y-auto sm:px-6 lg:px-8">
        <div
          className={`w-full p-8 text-center rounded-2xl shadow-lg ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          {/* Profile Avatar */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src={imagePreview}
              alt={user.name}
              className="object-cover w-32 h-32 mx-auto border-4 border-red-500 rounded-full"
            />
            <label className="absolute bottom-0 right-0 p-1 text-sm font-medium bg-red-600 rounded-full cursor-pointer hover:bg-red-500">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              ✎
            </label>
          </div>

          {/* Welcome Message */}
          <h2 className="mt-4 text-2xl font-bold">{`Welcome, ${user.name}! 👋`}</h2>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {user.email}
          </p>

          <div className="space-y-4 text-left">
            <h3 className="text-xl font-semibold">Profile Information</h3>
            <ul className="space-y-2">
              <li className="flex justify-between pb-2 border-b">
                <span className="font-medium">Username:</span>
                <span>{user.name}</span>
              </li>
              <li className="flex justify-between pb-2 border-b">
                <span className="font-medium">Email:</span>
                <span>{user.email}</span>
              </li>
              <li className="flex justify-between pb-2 border-b">
                <span className="font-medium">Account Type:</span>
                <span>Standard Member</span>
              </li>
              <li className="flex justify-between pb-2 border-b">
                <span className="font-medium">Join Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="mt-10 text-left">
            <h3 className="mb-3 text-xl font-semibold">
              Welcome to Product Page
            </h3>
            <p
              className={`mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Here’s a quick list of your available product categories:
            </p>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {[
                "Hoodies",
                "T-Shirts",
                "Sneakers",
                "Accessories",
                "Pants",
                "Bags",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 font-medium text-center rounded-lg transition ${
                    theme === "dark"
                      ? "bg-red-700/20 text-red-300 hover:bg-red-700/30"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <div className="fixed bottom-0 left-0 z-50 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
