import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Register from './pages/register';
import Login from './pages/loginpage';
import Resetpass from './pages/resetpass';
import Analysis from './pages/rejectionanalysis';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reset" element={<Resetpass/>} />
          <Route path="/analysis" element={<Analysis/>} />
      </Routes>  
    </Router> 
  
  );
}

export default App;

