import React, { Component } from 'react';

import Header from './components/header/Header';
import ContentsRouter from './components/contents/Router';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Header/>
            <ContentsRouter/>
            <Footer/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
