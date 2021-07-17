import {Container, Row, Col, Card, CardGroup, Jumbotron} from 'react-bootstrap';
import profileImage from '../assets/img/pr.png';
import mountainImage from '../assets/svg/kemah.svg';
import readingImage from '../assets/svg/read.svg';
import fishImage from '../assets/svg/fish.svg';
import OFFICE from '../assets/svg/office.svg';
import design from '../assets/svg/design.svg';
import primarySchool from '../assets/img/SD.png';
import JHS from '../assets/img/SMP.png';
import VHS from '../assets/img/SMK.png';
import PROGRAMING from '../assets/svg/coding.svg';
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
                    <b><p className="text-right readmore">Read more...</p></b>
                  }
                />
              </Col>

            </Row>
          </Container>
          <Container>
            <div className="text-center skils">
              <h2><u>Education</u></h2>
              <CardGroup className="cgShadow mt-4">
                <Card>
                  <Card.Img variant="top" src={primarySchool} />
                  <Card.Body>
                    <Card.Title>SDN BABAKAN SURABAYA UTARA</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={JHS} />
                  <Card.Body>
                    <Card.Title>SMP NEGERI 37 BANDUNG</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={VHS} />
                  <Card.Body>
                    <Card.Title>SMKS MVP ARS Internasional</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Container>
          <Container>
            <div className="text-center skils">
              <h2><u>Hobby</u></h2>
              <CardGroup className="cgShadow mt-4">
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
              <Row className="center mt-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={PROGRAMING}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">CODING</h3>
                    </div>
                    <div class="flip-card-back">
                      <h3 className="my-2">CODING</h3>
                      <Row className="justify-content-between">
                        {/* <Col>
                          <h6 className="my-2"><u>NATIVE</u></h6>
                          PHP NATIVE<br />
                        </Col>
                        <Col>
                          <h6 className="my-2"><u>Framework</u></h6>
                          REACT JS<br />
                          FLUTTER<br />
                          VUE JS<br />
                        </Col> */}
                        <Col>
                          <br />
                          HTML<br />
                          PHP<br />
                          CSS<br />
                          JS<br />
                        </Col>
                        <Col>
                          <h6 className="my-2"><u>Framework</u></h6>
                          REACT JS<br />
                          FLUTTER<br />
                          VUE JS<br />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={design}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">DESIGN</h3>
                    </div>
                    <div class="flip-card-back">
                      <h2 className="mt-2">DESIGN</h2>
                      <Row className="justify-content-between">
                        <Col>
                          Figma<br/>
                          Adobe Ilustator<br/>
                          
                        </Col>
                        <Col>
                          Inkscape<br/>
                          Adobe Photoshop<br/>
                          
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={OFFICE}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">OFFICE</h3>
                    </div>
                    <div class="flip-card-back">
                      <h2 className="mt-2">OFFICE</h2>
                      <Row className="justify-content-between">
                        <Col>
                          <p>Microsoft Word</p>
                          <p>Visio</p>
                        </Col>
                        <Col>
                          <p>Microsoft Excel</p>
                          <p>Power Point</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>

              </Row>
            </div>
          </Container>
        </div>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Jumbotron className="mt-4 text-center">
            <Row className="justify-content-center">
              <Row>
                <div>
                  <img
                    src={profileImage}
                    className="profileImage my-4 mx-auto"
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
                  readMoreText={<b><p className="readmore">Read more...</p></b>}
                />
              </Col>
            </Row>
          </Jumbotron>
          <Container>
            <div className="text-center skils">
              <h2><u>Education</u></h2>
              <Row className="mt-4" xs={1}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={primarySchool}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>SDN BABAKAN SURABAYA UTARA</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={JHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>SMP NEGERI 37 BANDUNG</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={VHS}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>SMK MVP ARS Internasional</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <div className="text-center skils">
              <h2><u>Hobby</u></h2>
              <Row className="mt-4" xs={1}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={mountainImage}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>HIKING</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={readingImage}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>READING</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Img
                        src={fishImage}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <Card.Title>KEEP FISH</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <div className="skils text-center">
              <h2><u>SKILS</u></h2>
              <small>TAP CARD TO VIEW</small>
              <Row className="center mt-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={PROGRAMING}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">CODING</h3>
                    </div>
                    <div class="flip-card-back">
                      <h3 className="my-2">CODING</h3>
                      <Row className="justify-content-between">
                        <Col>
                          <br />
                          HTML<br />
                          PHP<br />
                          CSS<br />
                          JS<br />
                        </Col>
                        <Col>
                          <h6 className="my-2"><u>Framework</u></h6>
                          REACT JS<br />
                          FLUTTER<br />
                          VUE JS<br />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={design}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">DESIGN</h3>
                    </div>
                    <div class="flip-card-back">
                      <h2 className="mt-2">DESIGN</h2>
                      <Row className="justify-content-between">
                        <Col>
                          <p>Figma</p>
                          <p>Adobe Ilustator</p>
                        </Col>
                        <Col>
                          <p>Inkscape</p>
                          <p>Adobe Photoshop</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        src={OFFICE}
                        className="vertical profileImage mx-auto"
                        variant="top"
                      />
                      <h3 className="centered">OFFICE</h3>
                    </div>
                    <div class="flip-card-back">
                      <h2 className="mt-2">OFFICE</h2>
                      <Row className="justify-content-between">
                        <Col>
                          <p>Microsoft Word</p>
                          <p>Visio</p>
                        </Col>
                        <Col>
                          <p>Microsoft Excel</p>
                          <p>Power Point</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default About;
