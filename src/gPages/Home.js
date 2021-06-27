// import {Row, Col} from 'react-bootstrap';
// import profileImage from '../../assets/img/s.png';
import '../assets/css/style.css';
import '../App.css'
import HomeDesktop from '../web/pages/HomeDesktop';
import HomeMobile from '../mobile/pages/HomeMobile';

function Home () {
  return (
    <div className="Home">
      <div className="hero">
        <HomeDesktop/>
        <HomeMobile/>
      </div>
    </div>
  );
}

export default Home;
