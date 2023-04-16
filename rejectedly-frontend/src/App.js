import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Register from './pages/register';
import Login from './pages/loginpage';
import Resetpass from './pages/resetpass';
import Analysis from './pages/rejectionanalysis';
import SaveAnalysis from './pages/saveanalysis';
import Profile from './pages/profilepage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reset" element={<Resetpass/>} />
          <Route path="/analysis" element={<Analysis/>} />
          <Route path="/saved" element={<SaveAnalysis/>} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>  
    </Router> 

  );
}

export default App;

