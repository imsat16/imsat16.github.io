// import {Row, Col} from 'react-bootstrap';
// import profileImage from '../../assets/img/s.png';
import '../../assets/css/style.css';
import '../../App.css';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

function Home () {
  return (
    <div className="Home">
      <div className="hero">
        <HomeDesktop/>
        {/* Mobile */}
       <HomeMobile/>

      </div>
    </div>
  );
}

export default Home;
