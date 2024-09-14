import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3 className="skills-title">Frontend</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-title">Backend</h3>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>Python</li>
            <li>Express</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-title">Databases</h3>
          <ul className="skills-list">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-title">Tools</h3>
          <ul className="skills-list">
            <li>Docker</li>
            <li>Git</li>
            <li>CI/CD Pipelines</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
