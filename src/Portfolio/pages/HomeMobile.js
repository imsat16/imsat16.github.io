import React from 'react';
import {Row, Col, Card, CardGroup} from 'react-bootstrap';
import profileImage from '../../assets/img/s.png';

const HomeMobile = () => {
  return (
    <div>
      <div className="d-sm-block d-md-none">
        <Row>
          <Col xs={12} md={6}>
            <div className="center">
              <h1>My React App</h1>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={profileImage}
              className="profileImage"
              alt="profileImage"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="center">
              <h2>Author: Imam Satrio Prakoso</h2>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={profileImage} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={profileImage} />
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>

          </Col>
        </Row>
      </div>

    </div>
  );
};

export default HomeMobile;
