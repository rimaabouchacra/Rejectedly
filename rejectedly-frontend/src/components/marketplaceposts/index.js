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
import ViewContacts from '../viewcontact';

const MarketplacePosts = () => {
  const [user, setUser] = useState(null);
  const [postStories, setPostStories] = useState([]);
  const [showPopup2, setShowPopup2] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);

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

    const handleImageClick = (id) => {
    axios.get(`http://localhost:8000/api/v1/auth/contacts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      console.log(response.data);
      setContactInfo(response.data.contactInfo);
      setShowPopup2(true);
      // handle the contact info here
    })
    .catch(error => {
      console.log(error);
    });
  }

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
              <img className='post-img' src={postStory.image_url} onClick={() => handleImageClick (postStory.user_id)} alt='user' />
               {showPopup2 && (
        <ViewContacts
          isOpen={showPopup2}
          onRequestClose={() => setShowPopup2(false)}
          contactInfo={contactInfo}
        />
      )}
              
              <div className='name-email'>
                <p className='post-name'>{postStory.name}</p>
                <p className='post-email'>{postStory.email}</p>
              </div>
            </div>
          )}
          <div className='post-containn'>
            <h2 className='before-after-title'>{postStory.story_type}</h2><br />
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