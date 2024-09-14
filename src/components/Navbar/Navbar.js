import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container-fluid">
        {/* Neel Munot on the left */}
        <Navbar.Brand href="#home" className="navbar-brand-left">Neel Munot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* All other links aligned to the right */}
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#work-experience">Work Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
