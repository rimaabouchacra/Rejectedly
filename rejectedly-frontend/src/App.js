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
import PostYourStory from './pages/collaboration_page';
import CreateGroup from './pages/group_page';
import AdminDashboard from './pages/admin_page';
import Posts from './pages/posts'
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
          <Route path="/collaboration" element={<PostYourStory/>} />
          <Route path="/group" element={<CreateGroup/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/posts" element={<Posts/>} />
      </Routes>  
    </Router> 

  );
}

export default App;

