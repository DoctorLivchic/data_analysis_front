import React, { Component } from 'react';
import './Main.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Aut from './pages/Aut';
import Reg from './pages/Reg';
import Free_analytics from './pages/Free_analytics';
import MainAut from './pages/MainAut';
import MainAutCard1 from './pages/MainAutCard1';
import Sphere_card from './pages/Sphere_card';
import HomePageAut from './pages/HomePageAut';
import Sphere from './components/Sphere'
import Slider_free from './components/Slider_free';

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
              <Route path='/pages/Sphere_card' element={<Sphere_card />} />
              <Route path='/pages/HomePageAut' element={<HomePageAut />} />
              <Route path='/components/Sphere' element={<Sphere />} />
              <Route path='/components/Slider_free' element={<Slider_free />} />
          </Routes>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;

