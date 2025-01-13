import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Note from './Note';
import Sqi11 from './Sqi11';
import Sqi2 from './Sqi2';
import Sqi3 from './Sqi3';
import Sqi4 from './Sqi4';
import Sqi5 from './Sqi5';
import Sqi6 from './Sqi6';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Note />
    <Sqi11 />
    <Sqi2 />
    <Sqi3 />
    <Sqi4 />
    <Sqi5 />
    <Sqi6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
