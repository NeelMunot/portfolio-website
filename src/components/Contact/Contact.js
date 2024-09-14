import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <a href="mailto:neelmunot2003@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>Email: neelmunot2003@gmail.com</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="tel:+919011029081" className="contact-link">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>Phone: +91-9011029081</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/neel-munot-965672229/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/NeelMunot" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
