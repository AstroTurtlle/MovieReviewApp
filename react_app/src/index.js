import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
=======

import Navbar from './Components/Navbar/Navbar.js';
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
=======
<div style={{display:'flex', flexDirection:'column', width:'100vw', height:'100vh'}}>
      <Navbar/>
      <App />
    </div>
  </React.StrictMode>
  
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
