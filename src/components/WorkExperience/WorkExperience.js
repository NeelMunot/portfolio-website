import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="work-experience-container">
        <div className="work-experience-tile">
          <h3 className="work-title">Software Developer</h3>
          <h4 className="company-name">XYZ Company</h4>
          <p className="duration">Jan 2023 - Present</p>
          <p className="job-description">
            Worked on developing an AI-powered application for predictive analytics, focusing on machine learning algorithms and data processing pipelines.
          </p>
        </div>
        <div className="work-experience-tile">
          <h3 className="work-title">Intern - Web Developer</h3>
          <h4 className="company-name">ABC Tech</h4>
          <p className="duration">May 2022 - Aug 2022</p>
          <p className="job-description">
            Assisted in building front-end components using React.js and Bootstrap, optimized web performance, and improved accessibility of the website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
