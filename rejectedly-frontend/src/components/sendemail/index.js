import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'

const SendEmail = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/password/email', {
                email: email
            });
            setLoading(false);
            navigate("/login");
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    }

    return (
        <div>
            <div className='signup-form'>
                <h1 className='titre'>Password Reset</h1>
                <p className='titre2'>You will receive instructions for resetting your password</p>
                <form className='form' onSubmit={handleSubmit}>
                      @csrf
                    <div className='signup-container'>
                        <label className='label' htmlFor="email">Email:</label>
                        <input
                            className='input-field email'
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <br /><br />
                    <div className='btn'>
                        <button className='all-btn loginn-btn ' disabled={loading}>
                            {loading ? "Loading..." : "Send"}
                        </button>
                    </div>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
            <br/>
        </div>
    );
};

export default SendEmail;
