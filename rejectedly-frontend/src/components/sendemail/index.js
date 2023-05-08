import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'

const SendEmail = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/password/email', {
                email: email
            });
            setLoading(false);
            navigate("/login");
        } catch (error) {
            setLoading(false);
            setError("*Email is invalid");
        }
    }

    return (
        <div>
            <div className='signup-form'>
                <h1 className='titre'>Password Reset</h1>
                <p className='titre2'>You will receive instructions for resetting your password</p>
                <form className='form' onSubmit={handleSubmit}>
                      
                    <div className='signup-container'>
                        <label className='label' htmlFor="email">Email:</label>
                        <input
                            className={`input-field email ${error ? "error" : ""}`}
                            type="email"
                            placeholder='Email'
                            required
                            value={error ? error : email}
                            onChange={(e) => {
                               setEmail(e.target.value);
                               setError("");
                            }}
                            onFocus={() => setError("")} 
                        />
                    </div>
                    <br /><br />
                    <div className='btn'>
                        <button className='all-btn loginn-btn ' disabled={loading}>
                            {loading ? "Loading..." : "Send"}
                        </button>
                    </div>
                   
                </form>
            </div>
            <br/>
        </div>
    );
};

export default SendEmail;

