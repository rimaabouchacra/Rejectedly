import './index.css';
import '../index.css';
import '../rejectionstory/index.css';
import '../newstory/index.css';
import '../improvedstory/index.css';
import '../myposts/index.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostEmpty from '../postrejectionempty';
import { useNavigate } from "react-router-dom";

const MarketplacePosts = () => {
  const [user, setUser] = useState(null);
  const [postStories, setPostStories] = useState([]);
  

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

    axios.get('http://localhost:8000/api/v1/auth/rejection-stories/improved', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setPostStories(response.data.postStories);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);


  const navigate = useNavigate();
  const handleNewPost = () => {
    
    navigate('/marketplace')
  };

  if (postStories.length === 0) {
    return <PostEmpty/>;
  }
  
    return (
    <div className="post-container">
      <div className='header collaborate'>
        <h1>MARKETPLACE</h1>
        <button onClick={handleNewPost} className='all-btn'>New Post</button>
      </div>
      {postStories.map((postStory) => (
        <div className='post m' key={postStory.id}>
          {user && (
            <div className='user-info'>
              <img className='post-img' src={postStory.image_url} alt='user' />
              <div className='name-email'>
                <p className='post-name'>{postStory.name}</p>
                <p className='post-email'>{postStory.email}</p>
              </div>
            </div>
          )}
          <div className='post-containn'>
            <h3>{postStory.story_type}</h3>
            <div className='before-after'>
                <div className='m-post'>
                <div className='m-contain'>
                    <h3 className='m-title'>Before Improvement</h3>
                </div>
               <p className='post-textt'>{postStory.story_text}</p>
            </div>
            <div className='m-post'>
                <div className='m-contain'>
                    <h3 className='m-title'>After Improvement</h3>
                </div>
                <p className='post-textt'>{postStory.story_text_improved}</p>
            </div>
            </div>
            
            
          </div>
        </div>
      ))}
      
    </div>
  );
  }
  


export default MarketplacePosts;