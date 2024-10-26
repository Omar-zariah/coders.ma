// src/App.js
import React from 'react';
import './index.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
