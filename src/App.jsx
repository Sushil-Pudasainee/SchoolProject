import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import KnowAboutSchool from './Dropdown/KnowAboutSchool';
import OurMissionVisionObjectives from './Dropdown/OurMissionVisionObjectives';
import Testimonials from './Dropdown/Testimonials';
import TeacherDetails from './Dropdown/TeacherDetails';
import FAQ from './Dropdown/FAQ'; // Ensure correct casing
import Home from './pages/Home';
import Academic from './pages/Academic';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Section from './Components/Section';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
         
          <Route path="/" element={<><Section /><Header /><Home /></>} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dropdown Pages */}
          <Route path="/about/know-about-school" element={<KnowAboutSchool />} />
<Route path="/about/mission-vision-objectives" element={<OurMissionVisionObjectives />} />
<Route path="/about/testimonials" element={<Testimonials />} />
<Route path="/about/teacher-details" element={<TeacherDetails />} />
<Route path="/about/faq" element={<FAQ />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
