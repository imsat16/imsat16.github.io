import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import profileImage from '../assets/img/pr.png';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import {
  FaArrowRight,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

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
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src={profileImage}
                  className="profileImage"
                  alt="profileImage"
                />
              </Col>
              <Col md={5}>
                <h1>Hello Im Imam</h1>
                <h4>Im a Web Developer</h4>
                <br />
                <Button
                  variant="outline-dark"
                  type="button"
                  onClick={handleClick}
                >
                  About Me <FaArrowRight />
                </Button>
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
                <Row className="mb-2">
                  <Button
                    onClick={() =>
                      window.open (
                        'https://www.youtube.com/channel/UCE9H0gB19xCSnKjAV6sGPWg',
                        '_blank'
                      )}
                    variant="outline-dark"
                  >
                    <FaYoutube />
                  </Button>
                </Row>
                <Row>
                  <Button
                    onClick={() =>
                      window.open ('https://github.com/imsat16', '_blank')}
                    variant="outline-dark">
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
                <h1 className="text-center mt-5">Hello im Imam</h1>
              </div>
              <Row>
                <img
                  src={profileImage}
                  className="profileImage mx-auto"
                  alt="profileImage"
                />
              </Row>
              <Col xs="12">
                <h4 className="text-center">Web Dev | Mobile Dev</h4>
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
