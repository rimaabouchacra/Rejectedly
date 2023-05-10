import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css'
import '../index.css'
import logo2 from '../../images/logo2.png'
import account from '../../images/account.png'
const Signup = ()=>{

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [is_admin, setAdmin] = useState('');

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
            localStorage.setItem('is_admin',response.data.user.is_admin)
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
        <h1 className='titre'>Sign up</h1>
        <div>
            <img className='account' src={account} alt="" />
        </div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input 
                   className={`input-field name ${nameError ? "error" : ""}`} 
                   type="text" 
                   placeholder='Name' 
                   value={nameError ? nameError : name}
                   onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                   onFocus={() => setNameError("")} 
                />
                
            </div><br/>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className={`input-field email ${emailError ? "error" : ""}`}
                 type="email"
                 placeholder='Email'
                 value={emailError ? emailError: email} 
                
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                 }}
                 onFocus={() => setEmailError("")}
                 />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className={`input-field email ${passwordError ? "error" : ""}`}
                 type={passwordError ? "text" : "password"}
                 placeholder='Password'
                 value={passwordError ? passwordError: password} 
                onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                }}
                onFocus={() => setPasswordError("")}
                />
            </div><br/>
            <div>
                <button className='all-btn singup-btn'>SIGNUP</button>
            </div><br />
            <div>
                <label className='label link-redirect' htmlFor="name">Already have an account?<a className='login-text' href='login'>Login</a></label>
            </div>
        </form>
        </div><br/>
    </div>
    );
}

export default Signup;