// src/NavBar.js
import React, { useState } from 'react';

function NavBar() {
  // State to handle the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Name */}
        <div className="text-2xl font-bold">Coders.ma</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
          <a href="#footer" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white py-4 transition transform duration-300 ease-in-out">
            <a href="#hero" className="block px-4 py-2 hover:bg-gray-600">Home</a>
            <a href="#features" className="block px-4 py-2 hover:bg-gray-600">Features</a>
            <a href="#testimonials" className="block px-4 py-2 hover:bg-gray-600">Testimonials</a>
            <a href="#footer" className="block px-4 py-2 hover:bg-gray-600">Contact</a>
        </div>
)}
    </nav>
  );
}

export default NavBar;
