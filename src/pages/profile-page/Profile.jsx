// src/pages/profile-page/Profile.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.mode); // ✅ get theme

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

  return (
    <div
      className={`flex flex-col items-center min-h-screen py-10 px-4 sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#f9f6ef] text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-lg p-8 text-center rounded-2xl shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Profile Avatar */}
        <img
          src={user.image}
          alt={user.name}
          className="object-cover w-32 h-32 mx-auto border-4 border-red-500 rounded-full"
        />

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
  );
};

export default Profile;
