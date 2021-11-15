import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firstpage from './firstpage';
import reportWebVitals from './reportWebVitals';
import Pagetwo from './twopage';
import Pagethree from './threepage';
import Pagefour from './fourpage';
import Pagefive from './fivepage';
import Pagesix from './sixpage';
import Pageseven from './sevenpage';

ReactDOM.render(
  <React.StrictMode>
   <Firstpage/>
    <Pagetwo/>
    <Pagethree/>
    <Pagefour/>
    <Pagefive/>
    <Pagesix/>
    <Pageseven/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
