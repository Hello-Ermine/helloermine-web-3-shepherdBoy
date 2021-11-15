import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firstpage from './firstpage';
import reportWebVitals from './reportWebVitals';
import Pagetwo from './twopage';
import Navbar from './nav.js';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
   <Firstpage/>
    <Pagetwo/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
