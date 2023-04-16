import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";
import "../index.css";
import "../rejectionstory/index.css";

const Profilee = ({ defaultImage }) => {
  const [image, setImage] = useState(defaultImage);
  const [isHovering, setIsHovering] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = URL.createObjectURL(e.target.files[0]);
    setImage(selectedImage);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="story">
        <div className="header">
             <div
      className="edit-profile-image"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="profile-img">
      <img src={image} alt="" className="profile-image" />  
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
