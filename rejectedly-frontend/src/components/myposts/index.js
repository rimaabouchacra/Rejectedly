// import '../index.css'
// import '../rejectionstory/index.css'
// import '../newstory/index.css'
// import '../improvedstory/index.css'

// import React, { useState } from "react";



// const Posts = () => {

// return(
//     <div className="story">
//         <div className='header collaborate'>
//             <h1>COLLABORATIONS</h1>
//             <button className='all-btn'>CREATE GROUP</button>
//         </div>
//        <div className='new-story'>
        
//        </div>
//     </div>
// )
// }
// export default Posts

// import './index.css'
// import '../index.css'
// import '../rejectionstory/index.css'
// import '../newstory/index.css'
// import '../improvedstory/index.css'

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const Posts = () => {
//   const [users, setUsers] = useState([]);
//   const [rejection_stories, setRejection_stories] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/v1/auth/user',
//     {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
    
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     axios.get('http://localhost:8000/api/v1/auth/latest-rejection-stories',
//     {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
//       .then(response => {
//         setRejection_stories(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="post-container">
//       <div className='header collaborate'>
//         <h1>COLLABORATIONS</h1>
//         <button className='all-btn'>CREATE GROUP</button>
//       </div>
//       <div className='post'>
//         {users &&
//           <div className='user-info'>
//             <img src={users.image_url} alt='user' />
//             <div className='name-email'>
//                 <h2>{users.name}</h2>
//                 <p>{users.email}</p>
//             </div>
            


import './index.css';
import '../index.css';
import '../rejectionstory/index.css';
import '../newstory/index.css';
import '../improvedstory/index.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';


const Posts = () => {
  const [user, setUser] = useState(null);
  const [rejection_stories, setRejectionStory] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/auth/user', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.log(error);
    });

    axios.get('http://localhost:8000/api/v1/auth/latest-rejection-stories', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setRejectionStory(response.data.latest_story);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="post-container">
      <div className='header collaborate'>
        <h1>COLLABORATIONS</h1>
        <button className='all-btn'>CREATE GROUP</button>
      </div>
      <div className='post'>
        {user && (
          <div className='user-info'>
            <img src={user.image_url} alt='user' />
            <div className='name-email'>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        )}
        {rejection_stories && rejection_stories.story_type && rejection_stories.story_text && (
        <div className='rejection-story' key={rejection_stories.id}>
        <h3>{rejection_stories.story_type}</h3>
        <p>{rejection_stories.story_text}</p>
        </div>
)}

      </div>
    </div>
  );
}


export default Posts;
