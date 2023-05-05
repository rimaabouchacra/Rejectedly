import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";
import "../newstory/index.css";
import Profile from "../../images/profile.png";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [biography, setBio] = useState("");
  const [linkedin_url, setLinkedin] = useState("");
  const [image_url, setImage] = useState("");
  const [DataSent, setDataSent] = useState(false);
  const [ErrorSent, setErrorSent] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    if (!token || !user_id) {
      console.error("No token or user_id found in local storage");
      return;
    }

    fetch(`http://localhost:8000/api/v1/auth/profile/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile data retrieved:", data);
        setUsername(data.username || "");
        setEmail(data.email || "");
        setPhone(data.phone_number || "");
        setBio(data.biography || "");
        setLinkedin(data.linkedin_url || "");
        setImage(data.image_url || "");
      })
      .catch((error) => {
        console.error("Error retrieving profile data:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      username,
      email,
      phone_number,
      biography,
      linkedin_url,
      image_url,
    };

    try {
      const token = localStorage.getItem("token");
      const user_id = localStorage.getItem("user_id");

      if (!token || !user_id) {
        console.error("No token or user_id found in local storage");
        return;
      }

      const response = await fetch(`http://localhost:8000/api/v1/auth/profile`, {
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
    
      setDataSent(true);
      setTimeout(() => {
        setDataSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving profile data:", error);
      setErrorSent(true);
      setTimeout(() => {
        setErrorSent(false);
      }, 3000);
    }
  };

    const handleImageChange = (e) => {
     e.preventDefault();   
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("profileImage", base64String);
      setImage(base64String);
      
    };
  };
  

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
  <form className="story edit-profile" onSubmit={handleSubmit}>
    <h1 className="myprofile">MY PROFILE</h1>
    <div className="profile-container">
      <div>
      {/*Profile image*/}
      <div className="container">
        <div
          className="edit-profile-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
      
        <div className="profile-image">
            {image_url ? 
              <img src={image_url} alt="" className="profile-img"/> :
              <img src={Profile} className="default" alt=""/>
            }
        </div>

          {isHovering && (
            <div className="edit-profile-image-overlay">
              <label htmlFor="profile-image-upload">
                <FaCamera />
              </label>
              <input
                type="file"
                id="profile-image-upload"
                onChange={handleImageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
    {/* Profile image*/}

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
)};
export default EditProfile