import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logoIm from '../assets/img/svg/squarelogo.svg';
// <img src={logoIm} width="35" height="35" alt="logoIm" />{' '}IMSAT
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const NavbarComponents = () => {
  return (
    <Router>
      <div>
        {/* Desktop Interface */}
        <div className = 'd-sm-none d-md-block'>
          <div className="myNavbar">
            <Navbar expand="lg" bg="dark" variant={'dark'}>
              <Container fluid>
                <Navbar.Brand as={Link} to={'/'}>
                  <img src={logoIm} width="35" height="35" alt="logoIm" />
                  {' '}
                  IMSAT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={Link} to={'/portfolio'}>Portfolio</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <div className = 'd-sm-block d-md-none fixed-top'>
          <div className="myNavbar">
            <Navbar expand="lg" bg="dark" variant={'dark'}>
              <Container fluid>
                <Navbar.Brand as={Link} to={'/'}>
                  <img src={logoIm} width="35" height="35" alt="logoIm" />
                  {' '}
                  IMSAT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={Link} to={'/portfolio'}>Portfolio</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
};

export default NavbarComponents;
