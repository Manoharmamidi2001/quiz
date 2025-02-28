import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Myapp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <Myapp/>
  </Router>
  </>
);