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
import Item from 'antd/es/list/Item';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {
            id:1 ,
            title:'Информационные технологии',
            img: ''
        },
        {
          id:2 ,
          title:'Медицина формацевтика',
          img: ''
        }
        ,
        {
          id:2 ,
          title:'Строительство, недвижемость',
          img: ''
        },
        {
          id:2 ,
          title:'Реклома,маркетинг,PR',
          img: ''
        }
      ]
    }
  }
  
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
              <Route path='/components/Sphere' element={<Sphere items={this.state.items}/>} />
          </Routes>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;

