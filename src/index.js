import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NavbarComponents from './Component/NavbarComponents';
import './assets/css/style.css';
import './assets/css/Components.css';

ReactDOM.render (
  <React.StrictMode>
    <NavbarComponents />
    <App />
  </React.StrictMode>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
