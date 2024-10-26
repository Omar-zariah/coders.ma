// src/Testimonials.js
import React from 'react';

function Testimonials() {
  return (
    <div className="bg-blue-50 text-gray-900 py-20 px-5 text-center" id="testimonials">
      <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
          <p className="italic">"Coders.ma helped me find my first development job and grow my skills faster than I ever imagined!"</p>
          <h4 className="mt-5 font-bold">- Sarah J.</h4>
        </div>
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
          <p className="italic">"The community here is amazing. I always find support and help when I need it."</p>
          <h4 className="mt-5 font-bold">- Ahmed K.</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
