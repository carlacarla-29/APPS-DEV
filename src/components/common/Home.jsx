import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/car.mp4" 
        autoPlay
        loop
        muted
      />

      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full px-4 md:px-20 pt-20 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 p-6 font-literature text-white">
          Welcome to RuenzCarlSmith (RCS) 2025!
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl italic">
          Your one-stop shop for everything you need, all in one place.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          Shop Now!
        </button>
      </main>
    </div>
  );
}
