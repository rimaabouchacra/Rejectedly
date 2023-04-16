import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";
import Profilee from "../profileimage";

const EditProfile = () => {
 
  return (
    <div className="story">
        <h1>MY PROFILE</h1>
        <div className="profile-container">
            <Profilee/>
            <div>
                <input type="text" />
            </div>
        </div>
    </div>
 
  );
};

export default EditProfile;
