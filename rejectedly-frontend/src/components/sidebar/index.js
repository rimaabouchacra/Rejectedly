import './index.css'
import logo2 from '../../images/logo2.png'
import axios from 'axios'
import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
  const token = localStorage.getItem('token');
  
  axios.get('http://localhost:8000/api/v1/auth/logout', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    
    localStorage.clear();
    navigate('/');
  })
  .catch((error) => {
    console.error('Logout error:', error);
  });
};
  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={logo2} alt="logo" />
      </div>
      <ul>
        <li className={activePage === 'saved' ? 'active' : ''}><a href='saved'>MY STORIES</a></li>
        <li className={activePage === 'profile' ? 'active' : ''}><a href='profile'>EDIT PROFILE</a></li>
        <li className={activePage === 'marketplace' ? 'active' : ''}><a href='marketplace'>MARKETPLACE</a></li>
        <li className={activePage === 'collaboration' ? 'active' : ''}><a href='collaboration'>COLLABORATION</a></li>
        <li className={activePage === 'posts' ? 'active' : ''}><a href='posts'>MY POSTS</a></li>
        <li className='li'><a onClick={handleLogout}>LOGOUT</a></li>
       
      </ul>
    </div>
  );
};


export default Sidebar;