// import './index.css'
// import logo2 from '../../images/logo2.png'
// import axios from 'axios';
// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const AdminSidebar = () => {
//  const navigate = useNavigate();
//  const handleLogout = () => {
//   const token = localStorage.getItem('token');
  
//   if (!token) {
//     console.error('No token found in localStorage');
//     return;
//   }

//   axios.get('http://localhost:8000/api/v1/auth/logout', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   .then((response) => {
//     console.log('Logout response:', response);
//     localStorage.removeItem('token');
//     console.log('Token removed from localStorage');
//     navigate('/');
//   })
//   .catch((error) => {
//     console.error('Logout error:', error);
//   });
// };
//   const handleAdminClick = () =>{
//     navigate('/');
//   }
//   return (
//     <div className="admin-sidebar">
//       <div className='logo'>
//         <img onClick={handleAdminClick} src={logo2} alt="logo" />
//       </div>
//       <ul>
//         <li className='users'><a href='admin'>ALL USERS</a></li>
//         <li className='users'><a href='admin'>TOTAL USERS</a></li>
//         <li className='li lii'><a onClick={handleLogout}>LOGOUT</a></li>
       
//       </ul>
//     </div>
//   );
// };


// export default AdminSidebar;
import React, { useState } from 'react';
import Modal from 'react-modal';
import './index.css';
import logo2 from '../../images/logo2.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ViewCount from '../viewcount';

Modal.setAppElement('#root');

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isCountModalOpen, setIsCountModalOpen] = useState(false);
  const [count, setCount] = useState(null);

  const handleLogout = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      return;
    }

    axios
      .get('http://localhost:8000/api/v1/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleAdminClick = (e) => {
    e.preventDefault();
    const url = e.target.href;

      axios
        .get('http://localhost:8000/api/v1/auth/users/count', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setCount(response.data.count);
          setIsCountModalOpen(true);
        })
        .catch((error) => {
          console.error('Failed to fetch user count:', error);
        });
 
  };

  const handleCountModalClose = () => {
    setIsCountModalOpen(false);
    setCount(null);
  };

  return (
    <div className="admin-sidebar">
      <div className="logo">
        <img onClick={() => navigate('/')} src={logo2} alt="logo" />
      </div>
      <ul>
        <li className="users">
          <a href="admin"
             className={isCountModalOpen ? "notbold" : ""}
          >ALL USERS
          </a>
        </li>
        <li>
          <a
             href="admin/count"
             onClick={handleAdminClick}
             className={isCountModalOpen ? "bold" : ""}
          >TOTAL USERS
          </a>

        </li>
        <li className="li lii">
          <a onClick={handleLogout}>LOGOUT</a>
        </li>
      </ul>
      <ViewCount
        isOpen={isCountModalOpen}
        onRequestClose={handleCountModalClose}
        countTotal={{ count }}
      />
    </div>
  );
};

export default AdminSidebar;
