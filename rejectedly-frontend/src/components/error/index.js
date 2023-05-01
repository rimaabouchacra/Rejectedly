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
    navigate('/')
  }

  return (
    <div className="error-bg">
        <div className="error-page">
           <img src={error} alt="404" />
           <h3 className="oops">OOPS! Page Not Found</h3>
           <button onClick={handleGoHome} className="all-btn">BACK TO HOME</button>
        </div>
    </div>
    
  );
};

export default Error;
