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
            <div className="contact-inputs">
                <div>
                    <label className="profile-label" htmlFor="name">Full Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label  className="profile-label"  htmlFor="username">Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label  className="profile-label"  htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label  className="profile-label"  htmlFor="phone">PhoneNumber</label>
                    <input type="number" />
                </div>
            </div >
            <div className="contact-inputs">
                <div>
                    <label  className="profile-label"  htmlFor="bio">Biography</label>
                    <textarea name="bio" id="bio" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label  className="profile-label"  htmlFor="linkedin">Linkedin</label>
                    <input type="text" />
                </div>

            </div>
        </div>
    </div>
 
  );
};

export default EditProfile;
