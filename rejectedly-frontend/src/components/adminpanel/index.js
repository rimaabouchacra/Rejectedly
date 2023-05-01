import './index.css'
import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import '../improvedstory/index.css'
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users', 
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
return(
    <div className="story1 admin" >
        <div className='new-story adminn'>
           <div className='table-container'>
               <table className='table'>
                  <thead>
                       <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                       </tr>
                 </thead>
                <tbody>
                   {users && users.users && users.users.length > 0 ? (
                    users.users.map(user => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    </tr>
                   ))
                ) : (
          <tr>
            <td colSpan="3">No users yet</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
        </div>
        
    </div>
)
}
export default AdminPanel