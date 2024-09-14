import React from 'react';
import './Education.css';
import education from '../../data/education';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p><strong>GPA:</strong> {edu.GPA}</p>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
