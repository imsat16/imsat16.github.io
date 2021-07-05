import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

const FooterComponents = () => {
  return (
    <footer>
      <Card className="text-center">
        <Card.Body>
          <Button variant="outline-dark"><FaInstagram /></Button>{' '}
          <Button variant="outline-primary"><FaTwitter /></Button>{' '}
          <Button variant="outline-dark"><FaGithub /></Button>{' '}
          <Card.Text className="mt-3">
            COPYRIGHTS IMSAT 2021. ALL RIGHTS RESERVED.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Designed by Imam Satrio Prakoso
        </Card.Footer>
      </Card>
    </footer>
  );
};

export default FooterComponents;
