import React from 'react';
import {Row, Col} from 'react-bootstrap';
import profileImage from '../../assets/img/s.png';

const HomeMobile = () => {
  return (
    <div>
      <div className="d-sm-block d-md-none">
        <Row>
          <Col xs={12}>
            <div className="center">
              <h2>My PortFolio</h2>
            </div>
          </Col>
          <Col xs={12}>
            <img
              src={profileImage}
              className="profileImage"
              alt="profileImage"
            />
          </Col>
          <Col xs={12}>
            Author: Imam Satrio Prakoso
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default HomeMobile;
