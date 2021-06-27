import './App.css';
import './assets/css/style.css';
import FooterComponents from './gComponent/FooterComponents';
import Home from './gPages/Home';

function App () {
  return (
    <div className="App">
      <Home />
      <FooterComponents/>
    </div>
  );
}

export default App;
