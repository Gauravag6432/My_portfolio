import React from 'react';

import ContactSection from "./components/Home/Contact"
import Footer from "./components/Home/Footer"
import FreelancingServices from "./components/Home/Freelancing"
import Hero from "./components/Home/Hero"
import FeaturedProjects from "./components/Home/Projects"
import SkillsAndServices from "./components/Home/Skills"
import Navbar from "./components/Includes/Navbar"
import Experience from './components/Home/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SkillsAndServices />
      <Experience />
      <FeaturedProjects />
      <FreelancingServices/>
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default App