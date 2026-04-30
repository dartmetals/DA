import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhoWeServe from './components/WhoWeServe'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhoWeServe />
        <Stats />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
