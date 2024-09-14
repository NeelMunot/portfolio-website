import React from 'react';
import './About.css';
import profilePhoto from '../../assets/Images/profilePhoto.jpg';  // Add your image path here

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className="about-text">
          <h1>Neel Munot</h1>
          <p>
            I am a passionate engineer specializing in Cybersecurity, Cloud Computing, and Web Development.
            I have hands-on experience with various cloud platforms like GCP, security tools, and programming
            languages. My goal is to enhance security standards and contribute to impactful projects while
            continuously learning and growing in the field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
