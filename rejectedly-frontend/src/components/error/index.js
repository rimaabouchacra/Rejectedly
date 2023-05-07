import React, { useState } from "react";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";
import "../newstory/index.css";
import { useNavigate } from "react-router-dom";
import laptop from '../../images/laptop.png'
import error from '../../images/error.png'

const Error = () => {
  const navigate = useNavigate();
  const handleGoHome=()=>{
    navigate('/login')
  }

  return (
    <div className="error-bg">
        <div className="error-page">
           <img src={error} alt="404" />
           <h3 className="oops">OOPS! Page Not Found</h3>
           <button onClick={handleGoHome} className="all-btn">GO BACK</button>
        </div>
    </div>
    
  );
};

export default Error;
