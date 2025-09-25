import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast"; // ✅ only this one

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
    navigate("/checkout");
  };

  return (
    <div className="rounded-2xl shadow hover:shadow-lg transition p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <div className="flex justify-between items-center mt-2">
        <Link
          to={`/products/${product.id}`}
          className="text-Black-800 hover:underline"
        >
          Details
        </Link>
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="text-xs cursor-pointer bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="border border-gray-300 p-2 cursor-pointer text-black px-3 py-1 rounded hover:bg-gray-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
