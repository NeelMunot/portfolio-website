import React, { useState } from 'react';
import './Projects.css';
import projects from '../../data/projects';
import { Modal, Button } from 'react-bootstrap';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleShowModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleShowModal(project)}>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{activeProject.details}</p>
            <h5>Skills Acquired:</h5>
            <ul>
              {activeProject.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <a href={activeProject.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
