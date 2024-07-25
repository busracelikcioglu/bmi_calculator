import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import AboutBMI from './pages/AboutBMI';
import './styles/global.css';
import Calculations from './pages/Calculations';
import MainContextProvider from './context/MainContextProvider';



function App() {
  return (
    <>
        <MainContextProvider>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about-bmi" element={<AboutBMI />} />
        <Route path="/calculations" element={<Calculations />} />


      </Routes>
      </MainContextProvider>

    </>
  );
}

export default App;
