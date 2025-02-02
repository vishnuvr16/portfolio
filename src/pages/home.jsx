import React from 'react';
import Header from '../components/header';
import HeroSection from '../components/hero';
import AboutMe from '../components/aboutme';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Certifications from '../components/certification';
import Projects from '../components/projects';
import Footer from '../components/footer';

const Homepage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;