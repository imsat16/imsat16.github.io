import {Container, Card,Row,Button,Col, CardGroup} from 'react-bootstrap';
import CONTACT from '../assets/img/svg/contact.svg';
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import {SiTiktok,SiGmail} from 'react-icons/si'

function Contact () {
  return (
    <div className="Contact">
      <Container>
        <div className="text-center skils">
          <small className="d-sm-block d-md-none">penambah</small>
          <h2><u>CONTACT ME !</u></h2>
          <CardGroup className="cgShadow">
            <Card className="d-none d-md-block">
              <Card.Body>
                <Card.Img
                  src={CONTACT}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
                {/* <h3 className="centered">HIKING</h3> */}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text className="d-flex flex-column my-5 justify-content-start align-items-end">
                  <Col>
                  <Button
                    onClick={() =>
                      window.open ('mailto:imamsatrio23@gmail.com', '_blank')}
                    variant="outline-dark"
                  >
                    <SiGmail />
                  </Button> {" "}
                  <Button
                    onClick={() =>
                      window.open ('https://instagram.com/im_sat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaInstagram />
                  </Button> {" "}
                
                  <Button
                    onClick={() =>
                      window.open ('https://twitter.com/im_sat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaTwitter />
                  </Button> {" "}
              </Col>
              <br/>
              <Col>
                  <Button
                    onClick={() =>
                      window.open (
                        'https://www.youtube.com/channel/UCE9H0gB19xCSnKjAV6sGPWg',
                        '_blank'
                      )}
                    variant="outline-dark"
                  >
                    <FaYoutube />
                  </Button> {" "}
                
                  <Button
                    onClick={() =>
                      window.open ('https://github.com/imsat16', '_blank')}
                    variant="outline-dark"
                  >
                    <FaGithub />
                  </Button> {" "}
                  
                  <Button
                    onClick={() =>
                      window.open ('https://www.tiktok.com/@im_sat16', '_blank')}
                    variant="outline-dark"
                  >
                    <SiTiktok />
                  </Button> {" "}
                  </Col>
              </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
