import './index.css'
import logo2 from '../../images/logo2.png'
import axios from 'axios'
import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const user_id = localStorage.getItem('user_id');
  const email = localStorage.getItem('email');
  
  if (!token) {
    console.error('No token found in localStorage');
    return;
  }

  axios.get('http://localhost:8000/api/v1/auth/logout', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    console.log('Logout response:', response);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    console.log('Token removed from localStorage');
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
        <li className={activePage === 'analysis' ? 'active' : ''}><a href='analysis'>MY STORIES</a></li>
        <li className={activePage === 'profile' ? 'active' : ''}><a href='profile'>EDIT PROFILE</a></li>
        <li className={activePage === 'marketplace' ? 'active' : ''}><a href='marketplace'>MARKETPLACE</a></li>
        <li className={activePage === 'collaboration' ? 'active' : ''}><a href='collaboration'>COLLABORATION</a></li>
        <li className='li'><a onClick={handleLogout}>LOGOUT</a></li>
       
      </ul>
    </div>
  );
};


export default Sidebar;