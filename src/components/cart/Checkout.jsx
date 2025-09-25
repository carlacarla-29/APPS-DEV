import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleOkay = () => {
    setShowPopup(false);
    navigate("/"); // redirect to homepage after clicking Okay
  };

  return (
    <div className="relative">
      {/* Checkout Form */}
      <div
        className={`max-w-lg mx-auto p-6 bg-white shadow rounded transition 
        ${showPopup ? "blur-sm pointer-events-none select-none" : ""}`}
      >
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Shipping Address</label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your complete address"
            ></textarea>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-1 font-medium">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Cash on Delivery (COD)</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-400">
                <input type="radio" name="payment" value="ewallet" disabled />
                <span>E-Wallet (Not Available)</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-400">
                <input type="radio" name="payment" value="gcash" disabled />
                <span>GCash (Not Available)</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>
      </div>

   {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm">
    <div className="bg-white/90 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border border-gray-100">
      {/* Icon / Emoji */}
      <div className="text-4xl mb-4">🎉</div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
        Thank You!
      </h3>

      {/* Message */}
      <p className="text-gray-700 mb-2">
        Your order has been placed successfully.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Shipped to: <span className="italic">{address}</span>
      </p>

      {/* Button */}
      <button
        onClick={handleOkay}
        className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium py-2.5 rounded-lg hover:from-gray-700 hover:to-gray-600 transition"
      >
        Okay
      </button>
    </div>
  </div>
)}

    </div>
  );
}
