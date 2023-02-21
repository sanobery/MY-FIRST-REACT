// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstpage';
import InputBox from './components/InputBox';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <FirstPage />
        <Routes>
          <Route path='/inputbox' element={<InputBox />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
