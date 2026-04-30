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
import TrainingPage from './pages/Expertise/Training'
import InternshipPage from './pages/Expertise/Internship'
import JobPlacementSupportPage from './pages/Expertise/Jobplacementsupport'
import StudyAbroadPage from './pages/Expertise/Studyabroad'
import ContactUsPage from './components/ContactSection'

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
          <Route path='/training' element={<TrainingPage/>}/>
          <Route path='/internship' element={<InternshipPage/>}/>
          <Route path='/jobplacementsupport' element={<JobPlacementSupportPage/>}/>
          <Route path='/studyabroad' element={<StudyAbroadPage/>}/>
          <Route path='/contact-us' element={<ContactUsPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App