// src/components/common/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from '/public/logo.png'; // Make sure to put your uploaded logo in public/images

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="RCS Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl">RCS</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link to="/products" className="hover:text-green-400 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-green-400 transition">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
