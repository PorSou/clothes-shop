import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductCard from "./pages/ProductCard";
import Home from "./pages/home-page/Page";
import Shop from "./pages/shop-page/Shop";
import Men from "./pages/men-page/Men";
import Women from "./pages/women-page/Women";
import Kids from "./pages/kids-page/Kids";
import Category from "./pages/category-page/Category";
import FeaturedProducts from "./pages/feature-page/Feature";
import JoinCommunity from "./components/JoinCommunity";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Category />
                <FeaturedProducts />
                <JoinCommunity />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div>
                <Home />
                <Category />
                <FeaturedProducts />
                <JoinCommunity />
              </div>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<ProductCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
