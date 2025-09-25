import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      `Order placed!\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPayment: ${paymentMethod.toUpperCase()}`
    );

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
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
  );
}
