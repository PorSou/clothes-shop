import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

import Shop from "./pages/shop-page/Shop";
import Men from "./pages/men-page/Men";
import Women from "./pages/women-page/Women";
import Kids from "./pages/kids-page/Kids";
import Category from "./pages/category-page/Category";
import FeaturedProducts from "./pages/feature-page/Feature";
import JoinCommunity from "./components/JoinCommunity";
import Footer from "./components/Footer"; // Global Footer Component
import ProductDetail from "./components/card-detail-feature/ProductDetail";
import ProductDetailForCard from "./pages/feature-page/ProductDetailForCard";
import MarqueeBar from "./components/Marquee";
import Cart from "./pages/cart-page/Cart";
import Favorite from "./pages/favorite-page/Favorite";

import Profile from "./pages/profile-page/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/checkout-page/Checkout";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login-page/Login";
import Home from "./pages/home/Page";

const AppContent = () => {
  const [search, setSearch] = useState("");
  const theme = useSelector((state) => state.theme.mode);

  // Apply dark class on HTML root when theme === dark
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar search={search} setSearch={setSearch} />

      {/* Main content grows to fill space */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Category />
                <FeaturedProducts />
                <JoinCommunity />
                <MarqueeBar />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Category />
                <FeaturedProducts />
                <JoinCommunity />
                <MarqueeBar />
              </>
            }
          />
          <Route path="/home/:id" element={<ProductDetailForCard />} />
          <Route path="/shop" element={<Shop search={search} />} />
          <Route path="/shop/:id" element={<ProductDetail />} />

          <Route path="/men" element={<Men search={search} />} />
          <Route path="/women" element={<Women search={search} />} />
          <Route path="/kids" element={<Kids search={search} />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
