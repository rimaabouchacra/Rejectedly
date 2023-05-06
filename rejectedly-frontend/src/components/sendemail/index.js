import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'


const SendEmail = ()=>{

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");
 
    const navigate = useNavigate();

    
    return (
        <div>
        
        <div className='signup-form'>
        <h1 className='titre'>Password Reset</h1>
        <p className='titre2'>You will receive instructions for resetting your password</p><br />
        <form className='form'>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email'
                 type="email"
                  placeholder='Email'
                  value={emailError ? emailError: email} 
                />
               
            </div>
            <br /><br />
            <div className='btn'>
                <button className='all-btn loginn-btn '>Send</button>
            </div>
        </form>
        </div><br/>
        </div>
    );
}

export default SendEmail;