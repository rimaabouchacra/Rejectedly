import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import '../index.css'
import logo1 from '../../images/logo1.png'
const Reset = ()=>{


return (
    <div>
        <div className='signup-form'>
        <div>
            <img src={logo1} alt="logo" />
        </div>
        <h1>Reset Password</h1><br/>
        <form>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field name' type="email" placeholder='Email' />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="email">New password</label>
                <input className='input-field email' type="passwprd" placeholder='Password'/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Confirm password:</label>
                <input className='input-field pass' type="password" placeholder='Password'/>
            </div><br/>
            <div className='btn'>
                <button className='all-btn'>CHANGE</button>
            </div><br />
       
        </form>
        </div><br/>
    </div>
    );
}

export default Reset;