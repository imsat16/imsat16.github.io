import './App.css';
import profileImage from './assets/img/s.png';
import './assets/css/style.css';
import {Row, Col} from 'react-bootstrap';

function App () {
  return (
    <div className="App">
      <Row>
        <Col xs={12} md={12}>
          <h1>My React App</h1>
        </Col>
        <Col xs={12} md={12}>
          <h2>Author: Imam Satrio Prakoso</h2>
        </Col>
        <Col xs={12} md={12}>
          <img src={profileImage} className="profileImage" alt="profileImage" />
        </Col>

      </Row>
    </div>
  );
}

export default App;
