import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhoWeServe from './components/WhoWeServe'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Overview from './pages/About/Overview'
import WhyDataArtisans from './pages/About/Whydataartisans'
import OurJourney from './pages/About/Ourjourney'
import Leadership from './pages/About/Leadership'
import Locations from './pages/About/Locations'

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <WhoWeServe />
    <Stats />
    <WhyChooseUs />
    <Testimonials />
  </>
)

const App: React.FC = () => (
  <BrowserRouter>
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path='/whydataartisans' element={<WhyDataArtisans/>}/>
          <Route path='/ourjourney' element={<OurJourney/>}/>
          <Route path='/leadership' element={<Leadership/>}/>
          <Route path='/locations' element={<Locations/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App