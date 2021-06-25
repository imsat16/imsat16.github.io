import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logoIm from '../../assets/img/svg/im_logo_02.svg';

const NavbarComponents = () => {
  return (
    <Navbar className="" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logoIm} width="35" height="35" alt="logoIm" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
