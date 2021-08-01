import {Container, Card, CardGroup} from 'react-bootstrap';

function Contact () {
  return (
    <div className="Contact">
      <Container>
        <div className="text-center skils">
          <h2><u>Contact me</u></h2>
          <CardGroup className="cgShadow mt-4">
            <Card>
              <Card.Body>
                <Card.Img
                  src={''}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
                <h3 className="centered">HIKING</h3>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Img
                  src={''}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
                <h3 className="centered">READING</h3>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
