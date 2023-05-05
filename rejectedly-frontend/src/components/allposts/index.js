import '../index.css';
import '../rejectionstory/index.css';
import '../newstory/index.css';
import '../improvedstory/index.css';
import '../myposts/index.css'
import comment from '../../images/comment.png';
import send from '../../images/send.png';
import arrow from '../../images/arrow.png'
import ViewComments from '../viewcomment'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostEmpty from '../postrejectionempty';
import { useNavigate } from "react-router-dom";
import ViewContacts from '../viewcontact';

const AllPosts = () => {
  const [user, setUser] = useState(null);
  const [postStories, setPostStories] = useState([]);
  const [comment_text, setCommentText] = useState({}); 
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [comments, setComments] = useState([]);
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
    comment_text: comment_text[storyId]
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then(response => {
    console.log(response.data);
    setCommentText({ ...comment_text, [storyId]: '' });
    
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

  const navigate = useNavigate();
  
  const handleNewPost = () => {
    navigate('/collaboration')
  };
  
  
  const handleImageClick = (id) => {
    axios.get(`http://localhost:8000/api/v1/auth/contacts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      console.log(response.data);
      setContactInfo(response.data.contactInfo);
      setShowPopup2(true);
    })
    .catch(error => {
      console.log(error);
    });
  }

  if (postStories.length === 0) {
    return <PostEmpty/>;
  }
  else{
    return (
    <div className="post-container">
      <div className='header collaborate'>
        <h1>COLLABORATIONS</h1>
        <button onClick={handleNewPost} className='all-btn'>New Post</button>
      </div>
      {postStories.map((postStory) => (
        <div className='post' key={postStory.id}>
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

        <div className='post-contain'>
            <h3>{postStory.story_type}</h3>
            <p className='post-text'>{postStory.story_text}</p>
            <div className='comments'>
              <div className='cmnt-container'>
                  <img src={comment} alt="cmnt" />
                  <input className="cmnt" placeholder="Write a comment..." value={comment_text[postStory.id] || ''} onChange={(e) => setCommentText({ ...comment_text, [postStory.id]: e.target.value })}  />
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
      {showPopup && (
        <ViewComments
          isOpen={showPopup}
          onRequestClose={() => setShowPopup(false)}
          comments={comments}
        />
      )}
    </div>
  );
  }
  
}

export default AllPosts;