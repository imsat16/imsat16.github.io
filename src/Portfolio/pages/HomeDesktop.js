import React from 'react';
import {Row, Col, Card, CardGroup, Container} from 'react-bootstrap';
import profileImage from '../../assets/img/s.png';

const HomeDesktop = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="d-none d-md-block">
        <Row>
          <Col xs={12} md={6}>
            <div className="center">
              <h1>My React App</h1>
              <h4>Author: Imam Satrio Prakoso</h4>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={profileImage}
              className="profileImage"
              alt="profileImage"
            />
          </Col>
          <Container fluid>
            <Col md={12}>
              <CardGroup>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This card has even longer content than the first to
                          show that equal height action.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>

                  </Col>

                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This card has even longer content than the first to
                          show that equal height action.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>

                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This card has even longer content than the first to
                          show that equal height action.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </CardGroup>

            </Col>
          </Container>

        </Row>
      </div>

    </div>
  );
};

export default HomeDesktop;
