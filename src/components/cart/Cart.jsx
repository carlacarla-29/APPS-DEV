import React from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">
          Your cart is empty.{" "}
          <Link to="/products" className="text-Gray-800 font-semibold">
            Shop now
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section - Cart Items */}
      <div className="flex-1 bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold border-b pb-3 mb-4">Shopping Cart</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              {/* Product info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">₱{item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Qty Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) =>
                    updateQty(item.id, parseInt(e.target.value) || 1)
                  }
                  className="w-14 text-center border rounded"
                />
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Subtotal + Actions */}
              <div className="flex flex-col items-end">
                <p className="font-semibold">
                  ₱{(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-80 bg-white shadow rounded-lg p-4 h-fit">
        <h2 className="text-lg font-semibold border-b pb-2 mb-3">
          Order Summary
        </h2>

        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal ({cart.length} items)</span>
          <span>₱{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Shipping Fee</span>
          <span>₱0.00</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="flex-1 border rounded px-2 py-1"
          />
          <button className="bg-gray-600 text-white px-3 py-1 rounded">
            Apply
          </button>
        </div>

        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span>₱{total.toFixed(2)}</span>
        </div>

        {/* ✅ Navigate to Checkout */}
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          PROCEED TO CHECKOUT ({cart.length})
        </button>

        <button
          onClick={clearCart}
          className="mt-3 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
