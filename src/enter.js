import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main';

const Hero =({handleLogout})=> {
    return (
    <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
  </BrowserRouter>
        
    )
}

export default Hero;