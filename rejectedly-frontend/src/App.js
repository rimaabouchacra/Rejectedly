import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/home_page';
import Register from './pages/register_page';
import Login from './pages/login_page';
import Resetpass from './pages/resetpass_page';
import Analysis from './pages/rejectionanalysis_page';
import SaveAnalysis from './pages/saveanalysis_page';
import Profile from './pages/profile_page';
import PostImproved from './pages/marketplace_page';

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
          <Route path="/marketplace" element={<PostImproved/>} />
      </Routes>  
    </Router> 

  );
}

export default App;

