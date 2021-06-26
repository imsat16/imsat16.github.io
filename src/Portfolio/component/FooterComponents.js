import React from 'react';
import {Card} from 'react-bootstrap';

const FooterComponents = () => {
  return (
    <footer className="mt-4">
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
    </footer>
  );
};

export default FooterComponents;
