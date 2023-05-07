// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import '../signup/index.css'
// import '../index.css'
// import './index.css'
// import lock from '../../images/lock.png'
// const Reset = ()=>{


// return (
//     <div>
//         <div className='signup-form'>
        
//         <h1 className='titre'>Reset Password</h1>
//         <img className='lock' src={lock} alt="" />
//         <form className='form'>
//             <div className='signup-container'>
//                 <label className='label' htmlFor="email">Email:</label>
//                 <input className='input-field email' type="email" placeholder='Email' />
//             </div><br/>

//             <div className='signup-container'>
//                 <label className='label' htmlFor="password">New password:</label>
//                 <input className='input-field pass' type="password" placeholder='New Password'/>
//             </div><br/>

//             <div className='signup-container'>
//                 <label className='label' htmlFor="password">Confirm password:</label>
//                 <input className='input-field pass' type="password" placeholder='Confirm Password'/>
//             </div><br/><br />
//             <div>
//                 <button className='all-btn'>reset</button>
//             </div><br />
       
//         </form>
//         </div><br/>
//     </div>
//     );
// }

// export default Reset;

// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import '../signup/index.css'
// import '../index.css'
// import './index.css'
// import lock from '../../images/lock.png'

// const Reset = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/v1/auth/reset",
//         {
//           email: email,
//           password: password,
//           password_confirmation: confirmPassword,
//           token: new URLSearchParams(window.location.search).get("token"),
//         }
//       );
//       setLoading(false);
//       navigate("/login");
//     } catch (error) {
//       setLoading(false);
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <div className="signup-form">
//         <h1 className="titre">Reset Password</h1>
//         <img className="lock" src={lock} alt="" />
//         <form className="form" onSubmit={handleSubmit} method="post" action="http://localhost:8000/api/v1/auth/reset">
//           <div className="signup-container">
//             <label className="label" htmlFor="email">
//               Email:
//             </label>
//             <input
//               className="input-field email"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <br />

//           <div className="signup-container">
//             <label className="label" htmlFor="password">
//               New password:
//             </label>
//             <input
//               className="input-field pass"
//               type="password"
//               placeholder="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <br />

//           <div className="signup-container">
//             <label className="label" htmlFor="password">
//               Confirm password:
//             </label>
//             <input
//               className="input-field pass"
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <br />
//           <br />
//           <div>
//             <button className="all-btn" disabled={loading}>
//               {loading ? "Loading..." : "reset"}
//             </button>
//           </div>
//           {error && <div className="error">{error}</div>}
//         </form>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default Reset;



import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/index.css'
import '../index.css'
import './index.css'
import lock from '../../images/lock.png'

const Reset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/reset",
        {
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          token: new URLSearchParams(window.location.search).get("token"),
        }
      );
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="signup-form">
        <h1 className="titre">Reset Password</h1>
        <img className="lock" src={lock} alt="" />
        <form className="form" onSubmit={handleSubmit} method="post" action="http://localhost:8000/api/v1/auth/reset">
          <div className="signup-container">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="input-field email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          <div className="signup-container">
            <label className="label" htmlFor="password">
              New password:
            </label>
            <input
              className="input-field pass"
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />

          <div className="signup-container">
            <label className="label" htmlFor="password">
              Confirm password:
            </label>
            <input
              className="input-field pass"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <br />
          <div>
            <button className="all-btn" disabled={loading}>
              {loading ? "Loading..." : "reset"}
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <br />
    </div>
  );
};

export default Reset;
