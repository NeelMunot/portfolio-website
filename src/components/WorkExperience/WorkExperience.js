import React, { useState } from 'react';
import './WorkExperience.css';
import workExperience from '../../data/workExperience';
import { Modal } from 'react-bootstrap';

const WorkExperience = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  const handleShowModal = (experience) => {
    setActiveExperience(experience);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveExperience(null);
  };

  return (
    <section id="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="work-experience-container">
        {workExperience.map((experience, index) => (
          <div 
            key={index} 
            className="work-experience-card"
            data-reference={experience.reference}
            onClick={() => handleShowModal(experience)}
          >
            <h3 className="work-title">{experience.title}</h3>
            <h4 className="company-name">{experience.company}</h4>
            <p className="duration">{experience.duration}</p>
            <p className="location">{experience.location}</p>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {activeExperience && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeExperience.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{activeExperience.company}</h4>
              <p className="duration">{activeExperience.duration}</p>
              <p className="location">{activeExperience.location}</p>
              <h5>Key Responsibilities:</h5>
              <ul>
                {activeExperience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
              <div className="skills">
                <h5>Skills:</h5>
                <p>{activeExperience.skills.join(', ')}</p>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default WorkExperience;