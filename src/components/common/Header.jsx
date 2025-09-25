import React from "react";
import { Link } from "react-router-dom";
import logo from '/public/logo.png';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white w-100%">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="RCS Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl">RCS</span>
        </Link>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link to="/products" className="hover:text-gray-400 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-400 transition">
          <img src="/icon.png" alt="Cart" className="h-6 w-6 inline mr-1" />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
