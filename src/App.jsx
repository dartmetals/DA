import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhoWeServe from './components/WhoWeServe';
import NumbersMatter from './components/NumbersMatter';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhoWeServe />
      <NumbersMatter />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
