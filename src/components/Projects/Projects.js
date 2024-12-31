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

  const renderSubProjects = (subProjects) => {
    return subProjects.map((category) => (
      <div key={category.category}>
        <h5>{category.category}</h5>
        <ul>
          {category.projects.map((project, idx) => (
            <li key={idx}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            data-reference={project.title}
            onClick={() => handleShowModal(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {activeProject.description && <p>{activeProject.description}</p>}
              {activeProject.technologies && (
                <div className="technologies">
                  <h5>Technologies:</h5>
                  <p>{activeProject.technologies.join(', ')}</p>
                </div>
              )}
              {activeProject.subProjects && renderSubProjects(activeProject.subProjects)}
              {activeProject.playStoreLink && (
                <a href={activeProject.playStoreLink} target="_blank" rel="noopener noreferrer">
                  View on Play Store
                </a>
              )}
              {activeProject.githubLink && (
                <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
