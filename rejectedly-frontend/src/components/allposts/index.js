import '../index.css';
import '../rejectionstory/index.css';
import '../newstory/index.css';
import '../improvedstory/index.css';
import '../myposts/index.css'
import comment from '../../images/comment.png';
import send from '../../images/send.png';
import arrow from '../../images/arrow.png'
import React, { useState, useEffect } from "react";
import axios from 'axios';

const AllPosts = () => {
  const [user, setUser] = useState(null);
  const [postStories, setPostStories] = useState([]);
  const [comment_text, setCommentText] = useState('');

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

    axios.get('http://localhost:8000/api/v1/auth/All-posts', {
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

  return (
    <div className="post-container">
      <div className='header collaborate'>
        <h1>COLLABORATIONS</h1>
        <button className='all-btn'>CREATE GROUP</button>
      </div>
      {postStories.map((postStory) => (
        <div className='post' key={postStory.id}>
          {user && (
            <div className='user-info'>
              <img className='post-img' src={postStory.image_url} alt='user' />
              <div className='name-email'>
                <p className='post-name'>{postStory.name}</p>
                <p className='post-email'>{postStory.email}</p>
              </div>
            </div>
          )}
          <div className='post-contain'>
            <h3>{postStory.story_type}</h3>
            <p className='post-text'>{postStory.story_text}</p>
            <div className='comments'>
              <div className='cmnt-container'>
                  <img src={comment} alt="cmnt" />
                  <input className="cmnt" placeholder="Write a comment..." value={comment_text} onChange={(e) => setCommentText(e.target.value)} />
                  <img className='cmnt-img' src={send} alt="send" onClick={() => handleSubmit(postStory.id)} />
              </div>
              <div className="view">
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

export default AllPosts;