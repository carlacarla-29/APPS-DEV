import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import BrowseProducts from "../pages/BrowseProducts";

// Components
import ProductDetails from "../components/products/ProductDetails";
import Home from "../components/common/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* If you want HomePage instead of Home, just swap them */}
      <Route path="/" element={<Home />} />

      {/* Browse Products page */}
      <Route path="/products" element={<BrowseProducts />} />

      {/* Product details */}
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Cart + Checkout */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
