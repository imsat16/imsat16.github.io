import './App.css';
import './assets/css/style.css';
import FooterComponents from './Portfolio/component/FooterComponents';
import Home from './Portfolio/pages/Home';

function App () {
  return (
    <div className="App">
      <Home />
      <FooterComponents/>
    </div>
  );
}

export default App;
