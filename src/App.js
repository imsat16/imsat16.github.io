import './App.css';
import profileImage from './assets/img/s.png';
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Imam Satrio Prakoso</h2>
      <img src={profileImage} className="profileImage" alt="profileImage"/>
    </div>
  );
}

export default App;
