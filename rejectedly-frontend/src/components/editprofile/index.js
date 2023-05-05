import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";
import "../newstory/index.css";
import Profilee from "../profileimage";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [biography, setBio] = useState("");
  const [linkedin_url, setLinkedin] = useState("");
  const [DataSent, setDataSent] = useState("");
  const [ErrorSent, setErrorSent] = useState("");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    setUsername(storedProfile.username || "");
    setEmail(storedProfile.email || "");
    setPhone(storedProfile.phone_number || "");
    setBio(storedProfile.biography || "");
    setLinkedin(storedProfile.linkedin_url || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      username,
      email,
      phone_number,
      biography,
      linkedin_url,
      image_url: localStorage.getItem("profileImage"),
    };

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in local storage");
        return;
      }

      const response = await fetch("http://localhost:8000/api/v1/auth/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();
      console.log("Profile data saved:", profileData);

      
      localStorage.setItem("profile", JSON.stringify(profileData));
      setDataSent(true );
      setTimeout(() => {
      setDataSent(false );
      }, 3000);
    } catch (error) {
      console.error("Error saving profile data:", error);
      setErrorSent(true );
      setTimeout(() => {
      setErrorSent(false );
      }, 3000);
    }
  };


  return (
  <form className="story edit-profile" onSubmit={handleSubmit}>
    <h1 className="myprofile">MY PROFILE</h1>
    <div className="profile-container">
      <Profilee/>


      <div className="contact-inputs">
        <div>
          <label className="profile-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="profile-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="profile-label" htmlFor="phone">
            PhoneNumber
          </label>
          <input
            type="number"
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="contact-inputs">
        <div>
          <label className="profile-label" htmlFor="bio">
            Biography
          </label>
          <textarea
            className="textarea"
            name="bio"
            id="bio"
            cols="30"
            rows="6"
            value={biography}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="spacing">
          <label className="profile-label" htmlFor="linkedin">
            Linkedin
          </label>
          <input
            type="text"
            value={linkedin_url}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div>
          <button className="all-btn save" type="submit">
            SAVE
          </button>
          {DataSent  && <p>Saved successfully!</p>}
          {ErrorSent  && <p>Failed to save! try to change image size</p>}
          
        </div>
      </div>
    </div>
  </form>
)}
export default EditProfile;
