import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";
import Profile from "../../images/profile.png";

const Profilee = ({ defaultImage }) => {
  const [image_url, setImage] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : defaultImage;
  });
  const [isHovering, setIsHovering] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8000/api/v1/auth/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.image_url) {
            setImage(data.image_url);
          }
        })
        .catch((error) => console.error("Error fetching profile image:", error));
    }
  }, [userId]);

  const handleImageChange = (e) => {
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
    <div>
      <div className="container">
        <div
          className="edit-profile-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="profile-img">
            <img src={image_url} alt="" className="profile-image" />
            <img src={Profile} alt="" />
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
  );
};

export default Profilee;




