import {Container} from 'react-bootstrap';
import {Card, Col, Row} from 'react-bootstrap';
import IMGPOLI from '../assets/img/poliklinik.png';
import SAS from '../assets/img/sas.png';
import SPP from '../assets/img/spp.jpg';
import FAUCET from '../assets/img/autofaucet.png';
import TOIK from '../assets/img/toik.png';

function Portfolio () {
  return (
    <div className="Portfolio text-center">
      <Container>
        <h3>MY PORTFOLIO</h3>
        <hr />
        {/* Start Card */}
        <Row className="center my-4">
          <Col className="d-sm-block d-md-none">
            <h4>
              <u>MY PORTFOLIO</u>
            </h4>
            <p className="text-muted d-sm-block d-md-none">Tap item to Open</p>
          </Col>
          {/* Poliklinik */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Card.Img
                  src={IMGPOLI}
                  className="vertical profileImage mx-auto"
                />
              </div>
              <div
                class="flip-card-back go-center"
                onClick={() =>
                  window.open (
                    'https://portfolioimsat.000webhostapp.com/scaffold/',
                    '_blank'
                  )}
              >
                <Col><h4>Poliklinik</h4><small>Tap To Open</small></Col>
              </div>
            </div>
          </div>
          {/* Smart Aquaponic System */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Card.Img
                  src={SAS}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
              </div>
              <div
                class="flip-card-back go-center"
                onClick={() =>
                  window.open (
                    'https://www.youtube.com/watch?v=DNFgPD9pnZI',
                    '_blank'
                  )}
              >
                <Col>
                  <h4>Smart Aquaponic System</h4><small>Tap To Open</small>
                </Col>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Card.Img
                  src={FAUCET}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
              </div>
              <div
                class="flip-card-back go-center"
                onClick={() =>
                  window.open (
                    'https://www.youtube.com/watch?v=wLoFh-_jE0U',
                    '_blank'
                  )}
              >
                <Col><h4>Automatic Faucet</h4><small>Tap To Open</small></Col>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Card.Img
                  src={SPP}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
              </div>
              <div
                class="flip-card-back go-center"
                onClick={() =>
                  window.open ('https://github.com/imsat16/spppay', '_blank')}
              >
                <Col><h4>SPP PAY</h4><small>Tap To Open</small></Col>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Card.Img
                  src={TOIK}
                  className="vertical profileImage mx-auto"
                  variant="top"
                />
              </div>
              <div
                class="flip-card-back go-center"
                onClick={() =>
                  window.open (
                    'https://imsat16.github.io/toko_ikan/',
                    '_blank'
                  )}
              >
                <Col><h4>TOIK</h4><small>Tap To Open</small></Col>
              </div>
            </div>
          </div>
        </Row>
        {/* End Card */}
      </Container>
    </div>
  );
}

export default Portfolio;
