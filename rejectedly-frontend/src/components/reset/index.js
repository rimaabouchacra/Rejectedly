import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import '../index.css'
import './index.css'
import logo1 from '../../images/logo1.png'
const Reset = ()=>{


return (
    <div>
        <div className='reset-form'>
        <div>
            <img src={logo1} alt="logo" />
        </div>
        <h1>Reset Password</h1><br/>
        <form>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field emaill' type="email" placeholder='Email' />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="password">New password:</label>
                <input className='input-field newpass' type="password" placeholder='New Password'/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="password">Confirm password:</label>
                <input className='input-field pass' type="password" placeholder='Confirm Password'/>
            </div><br/>
            <div className='btn'>
                <button className='all-btn change'>CHANGE</button>
            </div><br />
       
        </form>
        </div><br/>
    </div>
    );
}

export default Reset;