import React from 'react';
import {Button, Col} from 'react-bootstrap';
import {Icon, Layer} from 'react-font-awesome-5';

const FooterComponents = () => {
  return (
    <div>
        <Col md="6" className="mt-4">
  <Button variant="outline-light">
    <Layer size="2x">
      <Icon.Instagram />
    </Layer>
  </Button>{' '}
  <Button variant="outline-success">
    <Layer size="2x">
      <Icon.Whatsapp />
    </Layer>
  </Button>{' '}
  <Button variant="outline-primary">
    <Layer size="2x">
      <Icon.Twitter />
    </Layer>
  </Button>{' '}
  <Button variant="outline-danger">
    <Layer size="2x">
      <Icon.Youtube />
    </Layer>
  </Button>{' '}
  <Button variant="outline-dark">
    <Layer size="2x">
      <Icon.Github />
    </Layer>
  </Button>{' '}
</Col>;

    </div>
  );
};

export default FooterComponents;
