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
import Locations from './pages/About/Locations'
import TrainingPage from './pages/Expertise/Training'
import InternshipPage from './pages/Expertise/Internship'
import JobPlacementSupportPage from './pages/Expertise/Jobplacementsupport'
import StudyAbroadPage from './pages/Expertise/Studyabroad'
import ContactUsPage from './components/ContactSection'
import JoinUs from './components/Joinus'
import DataEngineerCourse from './pages/Courses/DataEngineer'
import IndustriesPage from './pages/Expertise/IndustriesPage'
import AIPoweredHiring from './pages/Expertise/AIPoweredHiring'
import ApplicationDevelopmentPage from './pages/Expertise/ApplicationDevelopmentPage'
import CloudSolutions from './pages/Solutions/CloudSolutions'
import BIDataVisualization from './pages/Solutions/BIAndDataVisualization'
import IoTDigitalEngineering from './pages/Solutions/IOTDigital'
import DataArtificialIntelligence from './pages/Solutions/DataArtificial'
import EnterpriseSolutions from './pages/Solutions/EnterpriseSolutions'
import ProfessionalStaffing from './pages/Solutions/ProfessionalStaffing'
import ResearchConsulting from './pages/Solutions/ResearchConsulting'
import CareerTransitions from './pages/Solutions/CareerTransitions'

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
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/training' element={<TrainingPage/>}/>
          <Route path='/internship' element={<InternshipPage/>}/>
          <Route path='/jobplacementsupport' element={<JobPlacementSupportPage/>}/>
          <Route path='/studyabroad' element={<StudyAbroadPage/>}/>
          <Route path='/contact-us' element={<ContactUsPage/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
          <Route path='/data-engineer' element={<DataEngineerCourse/>}/>
          <Route path='/industries' element={<IndustriesPage/>}/>
          <Route path='/ai-powered-hiring' element={<AIPoweredHiring/>}/>
          <Route path='/application-development' element={<ApplicationDevelopmentPage/>}/>
          <Route path='/cloud-solutions' element={<CloudSolutions/>}/>
          <Route path='/bi-data' element={<BIDataVisualization/>}/>
          <Route path='/iot-digital' element={<IoTDigitalEngineering/>}/>
          <Route path='/data-artificial' element={<DataArtificialIntelligence/>}/>
          <Route path='/enterprise-solutions' element={<EnterpriseSolutions/>}/>
          <Route path='/professional-staffing' element={<ProfessionalStaffing/>}/>
          <Route path='/research-consulting' element={<ResearchConsulting/>}/>
          <Route path='/career-transitions' element={<CareerTransitions/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App