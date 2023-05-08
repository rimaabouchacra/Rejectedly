import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import google from '../../images/google.png'
const Loginn = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_admin, setAdmin] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
       e.preventDefault();
       
       console.log(email, password);
       const data = {
           "email": email,
           "password": password
        };
       const form = e.target;
       try {
           const response = await axios.post('http://localhost:8000/api/v1/auth/login', data);
           localStorage.setItem('token', response.data.authorisation.token);
           localStorage.setItem("user_id", response.data.user.id);
           localStorage.setItem("email", response.data.user.email);
           localStorage.setItem('is_admin',response.data.user.is_admin)
           console.log("Logged in successfully");
    
           if (response.data.user.is_admin == 1) {
                window.location.href = "/admin";
                
            } 
            else {
                window.location.href = "/saved";
            }
        } catch (error) {
             form.reset();
            setLoginError("Invalid Credentials");
            console.log("Invalid credentials");
           console.log(error);
        }
    };

    const handleGoogleLogin =  () => {
    window.location.href = 'http://localhost:8000/login/google';
    };

       return (
        <div>
        
        <div className='signup-form'>
        <h1 className='titre'>Login</h1>
        <div>
            <img
             onClick={handleGoogleLogin}
            className='google'
            src={google} alt="logo" />
        </div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className='input-field' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div><br/>
            {loginError && <p className="error">{loginError}</p>}
            <div className='btn'>
                <button className='all-btn loginn-btn '>Login</button>
            </div><br />
            
            <div>
                <label className='labell link-redirect-signup' htmlFor="name"><a className='forget' href="reset">Forget password?</a></label><br /><br />
                <label className='label link-redirect-signup' htmlFor="name">Don't have an account?<a className='login-text' href='signup'>Signup</a></label>
            </div>
        </form>
        </div><br/>
        </div>
    );
}

export default Loginn;