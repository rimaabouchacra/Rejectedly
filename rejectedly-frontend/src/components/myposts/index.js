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

import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import '../improvedstory/index.css'

import React, { useState, useEffect } from "react";
import axios from 'axios';

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [rejectionStories, setRejectionStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/auth/user',
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:8000/api/v1/auth/rejection-stories')
      .then(response => {
        setRejectionStories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="story">
      <div className='header collaborate'>
        <h1>COLLABORATIONS</h1>
        <button className='all-btn'>CREATE GROUP</button>
      </div>
      <div className='new-story'>
        {users &&
          <div className='user-info'>
            <img src={users.image_url} alt='user' />
            <h2>{users.name}</h2>
            <p>{users.email}</p>
          </div>
        }
        {Array.isArray(rejectionStories) && rejectionStories.map(story => (
  <div className='rejection-story' key={story.id}>
    <h3>{story.type}</h3>
    <p>{story.text}</p>
  </div>
))}

      </div>
    </div>
  );
}

export default Posts;
