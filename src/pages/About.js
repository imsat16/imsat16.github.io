import {Container, Row, Col, Card, CardGroup} from 'react-bootstrap';
import profileImage from '../assets/img/pr.png';
import mountainImage from '../assets/svg/kemah.svg';
import readingImage from '../assets/svg/read.svg';
import fishImage from '../assets/svg/fish.svg';
import primarySchool from '../assets/img/SD.png';
import JHS from '../assets/img/SMP.png';
import VHS from '../assets/img/SMK.jpg';
import {BrowserRouter as Router} from 'react-router-dom';
import ReadMoreReact from 'read-more-react';

function About () {
  return (
    <Router>
      <div className="About">
        <div className="d-none d-md-block">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src={profileImage}
                  className="profileImage"
                  alt="profileImage"
                />
              </Col>
              <Col md={6}>
                {/* <Card>
                  <Card.Body>
                <Card.Text> */}
                <Card.Title><h2><u>About Me</u></h2></Card.Title>
                <ReadMoreReact
                  text={
                    "Hello, my name is Imam Satrio Prakoso, you can just call me Imam / Imsat to be more familiar. I am a programmer focused on mobile & Web programming. I have been interested in programming since I was in Vocational High School with only learning programming at school and the rest were self-taught. In grade 11 I did an internship at a digital company in Bandung, only with a little bit of knowledge about programming, but that's where I learned a lot. Many people say I'm just lucky, but the goddess of fortune is also lazy to give her luck to people who don't try."
                  }
                  min={100}
                  ideal={150}
                  max={200}
                  readMoreText={
                    <b><p className="text-right">Read more...</p></b>
                  }
                />
              </Col>

            </Row>
          </Container>

          <Container>
            <div className="text-center skils">
              <h2><u>Education</u></h2>
              <hr />
              <Row md={3}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SDN BABAKAN SURABAYA UTARA</Card.Title>
                      <Card.Img
                        src={primarySchool}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SMP NEGERI 37 BANDUNG</Card.Title>
                      <Card.Img
                        src={JHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SMK MVP ARS Internasional</Card.Title>
                      <Card.Img
                        src={VHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="text-center skils">
              <h2><u>Hobby</u></h2>
              <hr />
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={mountainImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">HIKING</h3>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={readingImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">READING</h3>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={fishImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">KEEP FISH</h3>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Container>
          <Container>
            <div className="skils">
              <h2 className="text-center"><u>SKILS</u></h2>
              <h3>
                Programing :<br />
                Design :<br />
                Office :
              </h3>
            </div>
          </Container>
        </div>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Container className="mt-5 mb-5 text-center">
            <Row className="justify-content-center">
              <div>
                <h1 className="text-center mt-4">Hello im Imam</h1>
              </div>
              <Row>
                <div>
                  <img
                    src={profileImage}
                    className="profileImage mx-auto"
                    alt="profileImage"
                  />
                </div>
              </Row>
              <Col xs="12">
                <h4 className="text-center"><u>About Me</u></h4>
                <ReadMoreReact
                  className="mx-4"
                  text={
                    "Hello, my name is Imam Satrio Prakoso, you can just call me Imam / Imsat to be more familiar. I am a programmer focused on mobile & Web programming. I have been interested in programming since I was in Vocational High School with only learning programming at school and the rest were self-taught. In grade 11 I did an internship at a digital company in Bandung, only with a little bit of knowledge about programming, but that's where I learned a lot. Many people say I'm just lucky, but the goddess of fortune is also lazy to give her luck to people who don't try."
                  }
                  min={100}
                  ideal={150}
                  max={200}
                  readMoreText={
                    <b><p className=" text-dark">Read more...</p></b>
                  }
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="text-center skils">
              <h2><u>Education</u></h2>
              <hr />
              <Row xs={1}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SDN BABAKAN SURABAYA UTARA</Card.Title>
                      <Card.Img
                        src={primarySchool}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SMP NEGERI 37 BANDUNG</Card.Title>
                      <Card.Img
                        src={JHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>SMK MVP ARS Internasional</Card.Title>
                      <Card.Img
                        src={VHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="text-center skils">
              <h4><u>Hobby</u></h4>
              <hr />
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={mountainImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">HIKING</h3>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={readingImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">READING</h3>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={fishImage}
                      className="vertical profileImage mx-auto"
                      variant="top"
                    />
                    <h3 className="centered">KEEP FISH</h3>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Container>
          <Container>
            <div className="skils">
              <h4 className="text-center"><u>SKILS</u></h4>
              <h5>
                Programing :<br />
                Design :<br />
                Office :
              </h5>
            </div>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default About;
