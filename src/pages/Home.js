import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import profileImage from '../assets/img/s.png';
import {FaArrowRight} from 'react-icons/fa';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import {FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';

const Home = () => {
  let history = useHistory ();

  function handleClick () {
    history.push ('/about');
  }
  return (
    <Router>
      <div>
        {/* Desktop */}
        <div className="d-none d-md-block">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={1} />
              <Col md={4}>
                <h1>Hello im Imam</h1>
                <br />
                <h4>Im a Web Developer</h4>
                <br />
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={handleClick}
                >
                  About Me <FaArrowRight />
                </Button>
              </Col>
              <Col md={6}>
                <img
                  src={profileImage}
                  className="profileImage"
                  alt="profileImage"
                />
              </Col>
              <Col md={1}>
                <Row>
                  <Button
                    onClick={() =>
                      window.open ('https://instagram.com/im_sat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaInstagram />
                  </Button>
                </Row>
                <Row className="mt-2 mb-2">
                  <Button
                    onClick={() =>
                      window.open ('https://twitter.com/im_sat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaTwitter />
                  </Button>
                </Row>
                <Row>
                  <Button
                    onClick={() =>
                      window.open ('https://github.com/imsat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaGithub />
                  </Button>
                </Row>

              </Col>
            </Row>
          </Container>
        </div>
        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Container className="mt-5 mb-5 text-center">
            <Row className="justify-content-center">
              <div>
                <h2 className="text-center mt-4">Hello im Imam</h2>
              </div>
              <Row>
                <img
                  src={profileImage}
                  className="profileImage"
                  alt="profileImage"
                />
              </Row>
              <Col xs="12">
                <h5 className="text-center">Web Dev | Mobile Dev</h5>
              </Col>
              <Col xs="12" className="my-4">
                <Button variant="dark" type="button" onClick={handleClick}>
                  About Me <FaArrowRight />
                </Button>
              </Col>
              <Col xs="12">
                <Button
                  onClick={() =>
                    window.open ('https://instagram.com/im_sat16', '_blank')}
                  variant="outline-dark"
                >
                  <FaInstagram />
                </Button>
                {' '}
                <Button
                  onClick={() =>
                    window.open ('https://twitter.com/im_sat16', '_blank')}
                  variant="outline-dark"
                >
                  <FaTwitter />
                </Button>
                {' '}
                <Button
                  onClick={() =>
                    window.open ('https://github.com/imsat16', '_blank')}
                  variant="outline-dark"
                >
                  <FaGithub />
                </Button>
                {' '}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default Home;
