import logo from './logo.svg';
import './App.css';
import {react, useState} from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';

function App() {

  return (
    <Router>
      <div className="App">
        <div className='wrapper'>
          <div className='inner'>
            <Routes>
              <Route exact path = "/" element = {<Register/>} />
              <Route path = "/login" element = {<Login/>} />
              <Route path = "/register" element = {<Register/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
