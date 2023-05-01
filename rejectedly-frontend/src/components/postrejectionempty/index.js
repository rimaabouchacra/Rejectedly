import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import '../rejectionstory/index.css'
import './index.css'
import '../index.css'
import plus from '../../images/plus.png'
import { useNavigate } from "react-router-dom";

const PostEmpty = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    window.location.href = '/collaboration';
  };


  return (
    <div className="story">

      <div className='header'>
        <h1>MY POSTS</h1>
        <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
      </div>
      <div className='new-story text'>
        <h2 className='textt'>NO POSTS YET</h2>
        <p className='textt'>Rejectedly gives you the opportunity to post your rejection story to send and receive constructive feedback from the community, so that you identify the points that need improvements.</p>
        <img onClick={handleButtonClick} className='plus' src={plus} alt="plus" />
      </div>
    </div>
  );
}

export default PostEmpty;