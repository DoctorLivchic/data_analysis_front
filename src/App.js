import React, { Component } from 'react';
import './Main.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Aut from './pages/Aut';
import Reg from './pages/Reg';
import Free_analytics from './pages/Free_analytics';
import MainAut from './pages/MainAut';
import MainAutCard1 from './pages/MainAutCard1';

class App extends Component {
  render() {
    return (
        <div id='main'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/pages/auth' element={<Aut />} />
              <Route path='/pages/reg' element={<Reg />} />
              <Route path='/pages/free_analytics' element={<Free_analytics />} />
              <Route path='/pages/MainAut' element={<MainAut />} />
              <Route path='/pages/MainAutCard1' element={<MainAutCard1 />} />
          </Routes>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;
