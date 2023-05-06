import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import '../index.css'
import './index.css'
import lock from '../../images/lock.png'
const Reset = ()=>{


return (
    <div>
        <div className='signup-form'>
        
        <h1 className='titre'>Reset Password</h1>
        <img className='lock' src={lock} alt="" />
        <form className='form'>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email' type="email" placeholder='Email' />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="password">New password:</label>
                <input className='input-field pass' type="password" placeholder='New Password'/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="password">Confirm password:</label>
                <input className='input-field pass' type="password" placeholder='Confirm Password'/>
            </div><br/><br />
            <div>
                <button className='all-btn'>reset</button>
            </div><br />
       
        </form>
        </div><br/>
    </div>
    );
}

export default Reset;