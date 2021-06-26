import {Row, Col} from 'react-bootstrap';
import profileImage from '../../assets/img/s.png';
import '../../assets/css/style.css';
import '../../App.css';

function Home () {
  return (
    <div className="Home">
      <div className="hero">
        {/* Desktop */}
        <div className="d-none d-md-block">
          <Row>
            <Col xs={12} md={6} className="mt-4 ">
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
          </Row>

        </div>
        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col xs={12} md={6} className="mt-4 ">
              <div className="center">
                <h1>My React App</h1>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={profileImage}
                className="profileImage"
                alt="profileImage"
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="center">
                <h4>Author: Imam Satrio Prakoso</h4>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
}

export default Home;
