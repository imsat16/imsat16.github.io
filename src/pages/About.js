import {Container, Row, Col, Card} from 'react-bootstrap';
import profileImage from '../assets/img/pr.png';
// import Vue from '../assets/svg/vue.svg';
// import ReactVector from '../assets/svg/react.svg';
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
                <Card.Title><h2>About Me</h2></Card.Title>
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

                {/* </Card.Text>
                  </Card.Body>
                </Card> */}
                {/* <tr>
                  <td>
                    <h4>Name </h4>
                  </td>
                  <td className="pl-3">
                    <h4>: Imam Satrio Prakoso </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Date Of birth </h4>
                  </td>
                  <td className="pl-3">
                    <h4>: 16 January 2003 (18) </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Country </h4>
                  </td>
                  <td className="pl-3">
                    <h4>: Indonesia </h4>
                  </td>
                </tr> */}
              </Col>

            </Row>
          </Container>

          <Container>
            <div className="text-center skils">
              <h2><u>Hobby</u></h2>
              <h5>
                My hobbies are <u>hiking, reading, & traveling.</u>
              </h5>
            </div>
          </Container>
          <Container>
            <div className="skils">
              <h2 className="text-center"><u>Skils</u></h2>
              <h3>
                Programing :<br/>
                Design :<br/>
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
                <img
                  src={profileImage}
                  className="profileImage mx-auto"
                  alt="profileImage"
                />
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
        </div>
      </div>
    </Router>
  );
}

export default About;
