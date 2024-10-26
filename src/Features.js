// src/Features.js
import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaBriefcase } from 'react-icons/fa';

function Features() {
  return (
    <div className="bg-white text-gray-900 py-20 px-5 text-center" id="features">
      <h2 className="text-4xl font-bold mb-10">What We Offer</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Learning Hub</h3>
          <p>Access a wide range of tutorials and courses to learn coding at your own pace.</p>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Community</h3>
          <p>Join a supportive community of coders to share knowledge and grow together.</p>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <FaBriefcase className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Job Opportunities</h3>
          <p>Find your next opportunity by exploring job listings and freelance gigs.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
