import React from 'react';
import './index.css';
function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
    </div>
  );
}


function Hero() {
  return (
    <div className="bg-gray-900 text-white py-20 px-5 text-center">
      <h1 className="text-4xl font-bold mb-5">Where Coders Connect, Learn, and Grow</h1>
      <p className="text-xl mb-10">Coders.ma is your home for learning to code, finding your next tech opportunity, connecting with peers, and showcasing your skills.</p>
      <div className="flex justify-center gap-4">
        <a href="https://community.coders.ma" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">Join the Community</a>
        <a href="https://learn.coders.ma" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg">Start Learning</a>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="bg-white text-gray-900 py-20 px-5 text-center">
      <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-full md:w-1/4 bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Learning Hub</h3>
          <p>Access a wide range of tutorials and courses to learn coding at your own pace.</p>
        </div>
        <div className="w-full md:w-1/4 bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Community</h3>
          <p>Join a supportive community of coders to share knowledge and grow together.</p>
        </div>
        <div className="w-full md:w-1/4 bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Job Opportunities</h3>
          <p>Find your next opportunity by exploring job listings and freelance gigs.</p>
        </div>
      </div>
    </div>
  );
}


export default App;
