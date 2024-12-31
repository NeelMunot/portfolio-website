import React from 'react';
import skills from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const scrollToSection = (source, reference) => {
    const element = document.getElementById(source);
    if (element) {
      // Scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Find the specific component to highlight
      const component = document.querySelector(`[data-reference="${reference}"]`);
      if (component) {
        // Add highlight class
        component.classList.add('highlight-component');
        // Remove highlight after animation
        setTimeout(() => {
          component.classList.remove('highlight-component');
        }, 4000);
      }
    }
  };

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-title">{category}</h3>
            <ul className="skills-list">
              {Object.entries(skills).map(([skill, { source, reference }]) => (
                <li key={skill}>
                  <button 
                    className="skill-button"
                    onClick={() => scrollToSection(source, reference)}
                  >
                    {skill}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
