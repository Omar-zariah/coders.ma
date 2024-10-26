// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10" id="footer">
      <div className="container mx-auto px-4 text-center">
        <h4 className="font-bold text-xl mb-5">Coders.ma</h4>
        <p>Join our community to grow and succeed as a developer!</p>
        <div className="flex justify-center gap-4 mt-5">
          <a href="#" className="text-blue-400">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-blue-400">LinkedIn</a>
        </div>
        <p className="mt-5 text-sm">&copy; 2024 Coders.ma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
