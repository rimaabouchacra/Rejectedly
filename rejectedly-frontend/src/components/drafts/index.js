import './index.css'
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import '../index.css'
import '../rejectionstory/index.css'
import '../analysis/index.css'
import '../newstory/index.css'
import Analysis from '../analysis';

const Drafts = () => {
    const [showStory, setShowStory] = useState(false);
  const overlayRef = useRef(null);

  function handleButtonClick() {
    setShowStory(true);
  }

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) {
      setShowStory(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);


  const [showAnalysis, setShowAnalysis] = useState(false);
  const overlayReff = useRef(null);

  function handleButtonClick2() {
    setShowAnalysis(true);
  }

  function handleOverlayClick2(e) {
    if (e.target === overlayReff.current) {
      setShowAnalysis(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick2);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick2);
    };
  }, []);
  const [rejection_stories, setRejectionStories] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/v1/auth/rejection-stories', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setRejectionStories(response.data.not_improved_stories);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="post-container">
      <div className='header draft'>
        <h1>SAVED REJECTIONS</h1>
        <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
          {showStory && (
        <div className='overlay' ref={overlayRef}>
          <div className='popup'>
            <NewStory />
          </div>
        </div>
        )}
      </div>
      <div>
        <div className='each-one'>
            {rejection_stories && rejection_stories.map(story => (
          <div key={story.id}>
            <div className='thestory'>
                <h3>{story.story_type}</h3>
                <p>{story.story_text}</p> 
                <button onClick={handleButtonClick2} className='analysiss'><h3>SHOW ANALYSIS</h3></button>
            {showAnalysis && (
        <div className='overlay' ref={overlayReff}>
          <div className='popup-analysis'>
            <Analysis />
          </div>
        </div>
        )} 
            </div>
            
          </div>
        ))}
        </div>
        

      </div>
    </div>
  );
}


export default Drafts;
