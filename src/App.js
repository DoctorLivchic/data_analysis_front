import React, { Component } from 'react';
import './Main.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
        <div id='main'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;
