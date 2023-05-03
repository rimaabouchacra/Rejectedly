import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css'
import '../index.css'
import logo1 from '../../images/logo1.png'

const Signup = ()=>{

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const navigate = useNavigate();

const handleSubmit = async (e) => {
       e.preventDefault();
       let validation = true;
       if (!name.trim()) {
            setNameError("*Name is required");
            validation = false;
        }
        if (!email.trim()) {
            setEmailError("*Email is required");
            validation = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("*Email is invalid");
            validation = false;
        }
        if (!password.trim()) {
            setPasswordError("*Password is required");
            validation = false;
        } else if (password.trim().length < 8) {
            setPasswordError("*Password must be at least 8 characters");
            validation = false;
        }
        console.log(name, email, password)
        const data = {
            "name": name,
            "email": email,
            "password": password
        }
        if (validation) {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/signup', data);
            localStorage.setItem('token', response.data.authorisation.token);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("user_id", response.data.user.id);
            localStorage.setItem("email", response.data.user.email);
            console.log("success")
            if (response.data.user.is_admin == 1) {
                window.location.href = "/admin";
            } else {
                window.location.href = "/saved";
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 422) {
                setEmailError("*Email already exists");
            }
        }
        }
    };


return (
    <div className='body1'>
        <div className='signup-form'>
        <div>
            <img src={logo1} alt="logo" />
        </div>
        <h1>Create Account</h1><br/>
        <form className='form' onSubmit={handleSubmit}>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input className={`input-field name ${nameError ? "error" : ""}`} type="text" placeholder='Name' value={name}
                 onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                                
                }} />
            </div><br/>
            {nameError && <p className="error signup-container">{nameError}</p>}
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className={`input-field email ${emailError ? "error" : ""}`} type="email" placeholder='Email' value={email} 
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                 }}/>
            </div><br/>
            {emailError && <p className="error signup-container">{emailError}</p>}

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className={`input-field pass ${passwordError ? "error" : ""}`} type="password" placeholder='Password' value={password} 
                onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                }}/>
            </div><br/>
            {passwordError && <p className="error signup-container">{passwordError}</p>}
            <div>
                <button className='all-btn singup-btn'>SIGNUP</button>
            </div><br />
            <div className='linkk'>
                <label className='label' htmlFor="name">Already have an account?<a className='login-text' href='login'>Login</a></label>
            </div>
        </form>
        </div><br/>
    </div>
    );
}

export default Signup;