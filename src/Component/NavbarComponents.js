import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const NavbarComponents = () => {
  const [isOpen, setIsOpen] = useState (false);
  return (
    <Router>
      <div className="bg-blue-300 z-50">
        <div className=" ">
          <div className="flex flex-col lg:flex-row">
            <div className="flex justify-between items-center px-4 py-4 lg:py-0 border-b lg:border-0">
              <div>
                <div
                  as={Link}
                  to={'/'}
                  className="uppercase font-semibold text-white"
                >
                  IMSAT
                </div>
              </div>
              <div>
                <button
                  onClick={() => setIsOpen (!isOpen)}
                  className="focus:outline-none text-white block lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      className={!isOpen ? 'block' : 'hidden'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={isOpen ? 'block' : 'hidden'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-3 lg:py-0 `}
            >
              <div className="flex flex-col lg:flex-row items-center">
                <div className="block px-4 py-3 lg:py-5 text-white hover:border-b-3">
                  <Link to="/">Home</Link>
                </div>
                <div className="block px-4 py-3 lg:py-5 text-white hover:border-b-3">
                  <Link to="/about">About</Link>
                </div>
                <div className="block px-4 py-3 lg:py-5 text-white hover:border-b-3">
                  <Link to="/portfolio">Portfolio</Link>
                </div>
                <div className="block px-4 py-3 lg:py-5 text-white hover:border-b-3">
                  <Link to="/contact">Contact</Link>
                </div>

              </div>
            </div>
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
      {/* <div>
        <div className="d-none d-md-block">
          <div className="myNavbar">
            <Navbar expand="lg">
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
        
        <div className="d-md-none d-sm-block">
          <div className="myNavbar d-flex align-content-around flex-wrap">
            <Navbar
              expand="lg"
              className="fixed-top"
              bg="dark"
              variant={'dark'}
            >
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
      </div> */}

    </Router>
  );
};

export default NavbarComponents;
