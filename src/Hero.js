// src/Hero.js
import React from 'react';

function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-fixed text-white py-40 px-5 text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1542744095-291d1f67b221?fit=crop&w=1400&q=80')",
      }}
    >
      <h1 className="text-5xl font-extrabold mb-5 drop-shadow-md">Where Coders Connect, Learn, and Grow</h1>
      <p className="text-xl mb-10 max-w-2xl mx-auto drop-shadow-sm">
        Coders.ma is your home for learning to code, finding your next tech opportunity, connecting with peers, and showcasing your skills.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#community" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Join the Community
        </a>
        <a href="#learn" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Start Learning
        </a>
      </div>
      <div className="mt-10">
        <a href="#features" className="inline-block animate-bounce text-blue-600 text-4xl">
          ↓
        </a>
      </div>
    </div>
  );
}

export default Hero;
