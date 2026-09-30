import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

export default function Assignment1App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="a1-container">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="a1-main">
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'projects' && <ProjectCard />}
        {activeTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
