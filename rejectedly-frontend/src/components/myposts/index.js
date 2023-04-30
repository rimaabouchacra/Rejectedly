// import './index.css';
// import '../index.css';
// import '../rejectionstory/index.css';
// import '../newstory/index.css';
// import '../improvedstory/index.css';

// import React, { useState, useEffect } from "react";
// import axios from 'axios';


// const Posts = () => {
//   const [user, setUser] = useState(null);
//   const [rejection_stories, setRejectionStory] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/v1/auth/user', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
//     .then(response => {
//       setUser(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });

//     axios.get('http://localhost:8000/api/v1/auth/latest-rejection-stories', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
//     .then(response => {
//       setRejectionStory(response.data.latest_story);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   return (
//     <div className="post-container">
//       <div className='header collaborate'>
//         <h1>COLLABORATIONS</h1>
//         <button className='all-btn'>CREATE GROUP</button>
//       </div>
//       <div className='post'>
//         {user && (
//           <div className='user-info'>
//             <img className='post-img' src={user.image_url} alt='user' />
//             <div className='name-email'>
//               <p className='post-name'>{user.name}</p>
//               <p className='post-email'>{user.email}</p>
//             </div>
//           </div>
//         )}
//         {rejection_stories && rejection_stories.story_type && rejection_stories.story_text && (
//         <div className='rejection-story' key={rejection_stories.id}>
//         <h3>{rejection_stories.story_type}</h3>
//         <p className='post-text'>{rejection_stories.story_text}</p>
//         </div>
// )}

//       </div>
//     </div>
//   );
// }


// export default Posts;



import './index.css';
import '../index.css';
import '../rejectionstory/index.css';
import '../newstory/index.css';
import '../improvedstory/index.css';
// import Comments from '../../components/comment';
import '../comment/index.css'
import comment from '../../images/comment.png';
import send from '../../images/send.png';
import arrow from '../../images/arrow.png'
import ViewComments from '../viewcomment'
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Posts = () => {
  const [user, setUser] = useState(null);
  const [postStories, setPostStories] = useState([]);
  const [comment_text, setCommentText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
   const [comments, setComments] = useState([]);

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

    axios.get('http://localhost:8000/api/v1/auth/My-posts', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setPostStories(response.data.postStories);
      
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

 const handleSubmit = (storyId) => {
  axios.post('http://localhost:8000/api/v1/auth/comments', {
    story_id: storyId,
    comment_text: comment_text
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then(response => {
    console.log(response.data);
    setCommentText('');
  })
  .catch(error => {
    console.log(error);
  });
}


  const handleViewComments = (storyId) => {
  axios.get(`http://localhost:8000/api/v1/auth/comments/${storyId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then(response => {
    setComments(response.data.comments);
    setShowPopup(true);
    console.log(comments);
  })
  .catch(error => {
    console.log(error);
  });
}


  return (
    <div className="post-container">
      <div className='header collaborate'>
        <h1>MY POSTS</h1>
        <button className='all-btn'>CREATE GROUP</button>
      </div>
      {postStories.map((postStory,index) => (
        <div className='post' key={index}>
          {user && (
            <div className='user-info'>
              <img className='post-img' src={user.image_url} alt='user' />
              <div className='name-email'>
                <p className='post-name'>{user.name}</p>
                <p className='post-email'>{user.email}</p>
              </div>
            </div>
          )}
          <div className='post-contain'>
            <h3>{postStory.story_type}</h3>
            <p className='post-text'>{postStory.story_text}</p>
            <div className='comments'>
              {/* <Comments onClick={(comment_text) => handleCommentSubmit(postStory.id, comment_text)} /> */}
              {/* Comments */}
              <div className='cmnt-container'>
                  <img src={comment} alt="cmnt" />
                  <input className="cmnt" placeholder="Write a comment..." value={comment_text} onChange={(e) => setCommentText(e.target.value)} />
                  <img className='cmnt-img' src={send} alt="send" onClick={() => handleSubmit(postStory.id)} />

              </div>
              <div className="view" onClick={() => handleViewComments(postStory.id)}>
                    <img src={arrow} alt="" />
                    <p>View comments</p>
                    
              </div>
              
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Posts;



