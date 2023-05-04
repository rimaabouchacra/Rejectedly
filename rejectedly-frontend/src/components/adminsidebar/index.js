import './index.css'
import logo2 from '../../images/logo2.png'
import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
 const navigate = useNavigate();
 const handleLogout = () => {
  const token = localStorage.getItem('token');
  
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
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
    navigate('/');
  })
  .catch((error) => {
    console.error('Logout error:', error);
  });
};

  return (
    <div className="admin-sidebar">
      <div className='logo'>
        <img src={logo2} alt="logo" />
      </div>
      <ul>
        <li className='users'><a href='admin'>ALL USERS</a></li>
        <li className='li lii'><a onClick={handleLogout}>LOGOUT</a></li>
       
      </ul>
    </div>
  );
};


export default AdminSidebar;