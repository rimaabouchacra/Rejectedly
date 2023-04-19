import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import logo1 from '../../images/logo1.png'
const Loginn = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
       e.preventDefault();

       console.log(email, password);
       const data = {
           "email": email,
           "password": password
        };

       try {
           const response = await axios.post('http://localhost:8000/api/v1/auth/login', data);
           localStorage.setItem('token', response.data.authorisation.token);
           console.log("Logged in successfully");
        } catch (error) {
           console.log(error);
        }
    };
       return (
        <div>
        
        <div className='signup-form'>
        <div>
            <img src={logo1} alt="logo" />
        </div>
        <h1>Login</h1><br/>
        <form className='form' onSubmit={handleSubmit}>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className='input-field pass' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div><br/>
            <div className='btn'>
                <button className='all-btn loginn-btn '>Login</button>
            </div><br />
            <div>
                <label className='labell' htmlFor="name"><a href="reset">Forget password?</a></label><br /><br />
                <label className='label' htmlFor="name">Don't have an account?<a className='login-text' href='signup'>Signup</a></label>
            </div>
        </form>
        </div><br/>
        </div>
    );
}

export default Loginn;