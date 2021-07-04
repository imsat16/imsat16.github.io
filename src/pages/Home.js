import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import profileImage from '../assets/img/s.png';

const Home = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="d-sm-none d-md-block">
        <Row className="justify-content-around">
          <Col md={1} />
          <Col md={5}>
            <div>
              <h1>My React App</h1>
              <h4>Author: Imam Satrio Prakoso</h4>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={profileImage}
              className="profileImage"
              alt="profileImage"
            />
          </Col>{' '}
        </Row>
      </div>
      {/* Mobile */}

      <div className="d-sm-block d-md-none">
        <Container className="mt-5">
          <Row>
            <div>
              <h2 className="text-center mt-4">My PortFolio</h2>
            </div>
            <Col>
              <img
                src={profileImage}
                className="profileImage"
                alt="profileImage"
              />
            </Col>
            <p className="text-center mb-4">Author : Imam Satrio Prakoso</p>
          </Row>

        </Container>
      </div>

    </div>
  );
};

export default Home;
