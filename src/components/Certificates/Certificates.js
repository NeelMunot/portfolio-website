import React, { useState } from 'react';
import './Certificates.css';
import certificates from '../../data/certificates';
import { Modal, Button } from 'react-bootstrap';

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);

  const handleShowModal = (certificate) => {
    setActiveCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveCertificate(null);
  };

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card" onClick={() => handleShowModal(certificate)}>
            <h3>{certificate.title}</h3>
            <p>Completion Time: {certificate.completionTime}</p>
          </div>
        ))}
      </div>

      {activeCertificate && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{activeCertificate.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Completion Time:</strong> {activeCertificate.completionTime}</p>
            <p><strong>Validity:</strong> {activeCertificate.validity}</p>
            <h5>Skills Gained:</h5>
            <ul>
              {activeCertificate.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <a href={activeCertificate.link} target="_blank" rel="noopener noreferrer">
              View Certificate
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

export default Certificates;
