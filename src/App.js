import React from 'react';
import Navigation from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Education from './components/Education/Education';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <WorkExperience />
      <Projects />
      <Certificates />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
