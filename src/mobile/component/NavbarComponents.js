import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logoIm from '../../assets/img/svg/squarelogo.svg';
// <img src={logoIm} width="35" height="35" alt="logoIm" />{' '}IMSAT

const NavbarComponents = () => {
  return (
    <div className="myNavbar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logoIm} width="35" height="35" alt="logoIm" />{' '}IMSAT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Link</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
