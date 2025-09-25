import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/sky.mp4" // public folder path
        autoPlay
        loop
        muted
      />


      <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Main content */}
      <main className="relative flex flex-col justify-center items-center text-center w-full min-h-screen px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 p-6 font-literature text-white drop-shadow-lg">
         RuenzCarlSmith (RCS) 2025!
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl italic drop-shadow">
          Your one-stop shop for everything you need, all in one place.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold shadow-md"
        >
          Shop Now!
        </button>
      </main>
    </div>
  );
}
