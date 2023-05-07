import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
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
import AdminDashboard from './pages/admin_page';
import Posts from './pages/posts'
import AllPosts from './pages/all_posts';
import ErrorPage from './pages/error_page';
import MarketplacePosts from './pages/marketplace_posts';
function App() {
  
  const is_admin = JSON.parse(localStorage.getItem('is_admin'));

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
          <Route path="/posts" element={<Posts/>} />
          <Route path="/allposts" element={<AllPosts/>} />
          <Route path="/marketplaceposts" element={<MarketplacePosts/>} />
          <Route path="/admin" element={is_admin ? <AdminDashboard /> : <Navigate to="/error" />} />
          <Route path="/error" element={<ErrorPage/>} />
      </Routes>  
    </Router> 

  );
}


export default App;

