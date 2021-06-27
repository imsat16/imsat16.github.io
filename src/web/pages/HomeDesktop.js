import React from 'react';
import {Row, Col} from 'react-bootstrap';
import profileImage from '../../assets/img/s.png';

const HomeDesktop = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="d-none d-md-block">
        <Row>
          <Col md={6}>
            <div className="center">
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

    </div>
  );
};

export default HomeDesktop;
