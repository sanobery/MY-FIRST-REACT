// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import InputBox from './components/InputBox';
import About from './components/About';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Welcome />
      <HomePage />
      <Footer />
      {/* <Routes>
          <Route path='/inputbox' element={<InputBox />} />
          <Route exact path='/about' element={<About />} />
        </Routes> */}
      {/* </BrowserRouter > */}
    </>
  );
}

export default App;
