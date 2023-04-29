// import React, { useState } from "react";
// import { FaCamera } from "react-icons/fa";
// import "./index.css";
// import "../index.css";
// import "../rejectionstory/index.css";
// import "../newstory/index.css";
// import Profilee from "../profileimage";

// const EditProfile = () => {
 
//   return (
//     <form className="story edit-profile">
        
//         <h1 className="myprofile">MY PROFILE</h1>
//         <div className="profile-container">
//             <Profilee/>
//             <div className="contact-inputs">
//                 <div>
//                     <label  className="profile-label"  htmlFor="username">Username</label>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <label  className="profile-label"  htmlFor="email">Email</label>
//                     <input type="email" />
//                 </div>
//                 <div>
//                     <label  className="profile-label"  htmlFor="phone">PhoneNumber</label>
//                     <input type="number" />
//                 </div>
//             </div >
//             <div className="contact-inputs">
//                 <div>
//                     <label  className="profile-label"  htmlFor="bio">Biography</label>
//                     <textarea className="textarea" name="bio" id="bio" cols="30" rows="6"></textarea>
//                 </div>
//                 <div className="spacing">
//                     <label  className="profile-label"  htmlFor="linkedin">Linkedin</label>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <button className="all-btn save">SAVE</button>
//                 </div>

//             </div>
//         </div>
//     </form>
 
//   );
// };

// export default EditProfile;

import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      username,
      email,
      phone_number,
      biography,
      linkedin_url,
      profile_image: localStorage.getItem("profileImage"),
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
      console.log("Profile data saved:", data);

      // Save data to local storage
      localStorage.setItem("profile", JSON.stringify(profileData));
    } catch (error) {
      console.error("Error saving profile data:", error);
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
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className="profile-label" htmlFor="email">
              Email
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="profile-label" htmlFor="phone">
              PhoneNumber
            </label>
            <input type="number" value={phone_number} onChange={(e) => setPhone(e.target.value)} />
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
            <input type="text" value={linkedin_url} onChange={(e) => setLinkedin(e.target.value)} />
          </div>
          <div>
            <button className="all-btn save" type="submit">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
