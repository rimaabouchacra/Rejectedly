import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'


const SendCode = ()=>{

    const [code, setcode] = useState('');
    const [codeError, setcodeError] = useState("");
 
    const navigate = useNavigate();

    
    return (
        <div>
        
        <div className='signup-form'>
        <h1 className='titre'>Password Reset</h1>
        <p className='titre2'>You have requested a password reset. To get a new password, please check your Inbox and enter the Password reset code we have sent to you</p><br />
        <form className='form'>
            <div className='signup-container'>
                <label className='label' htmlFor="passreset">Password reset code:</label>
                <input className='input-field email'
                 type="number"
                  placeholder='Enter code here'
                  value={codeError ? codeError: code} 
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

export default SendCode;