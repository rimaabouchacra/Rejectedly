import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import './index.css'
import '../index.css'
import '../rejectionstory/index.css'
import '../analysis/index.css'
import '../newstory/index.css'
import Analysis from '../analysis';
import Story from '../rejectionstory';
import remove from '../../images/remove.png'

const Drafts = () => {
  const [showStory, setShowStory] = useState(false);
  const overlayRef = useRef(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState(null);
  const deletePopupRef = useRef(null);

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
    axios.get('http://localhost:8000/api/v1/auth/rejection-stories-user', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setRejectionStories(response.data.not_improved_stories);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  function handleAnalysisButtonClick(storyId) {
    setShowAnalysis(true);
    setStoryId(storyId);
  }
  
  const [storyId, setStoryId] = useState(null);
   

  function handleDeleteButtonClick(storyId) {
    setStoryToDelete(storyId);
    setShowDeletePopup(true);
  }

  function handleDeleteConfirm() {
    axios.delete(`http://localhost:8000/api/v1/auth/delete-story/${storyToDelete}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setShowDeletePopup(false);
      setRejectionStories(rejection_stories.filter(story => story.id !== storyToDelete));
      setStoryToDelete(null);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function handleDeleteCancel() {
    setShowDeletePopup(false);
    setStoryToDelete(null);
  }
  if (rejection_stories.length === 0) {
    return <Story />;
  }
  
  return (
    <div className="post-container">
      <div className='header draft'>
        <h1>SAVED REJECTIONS</h1>
        <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
          {showStory && (
        <div className='overlay' ref={overlayRef}>
          <div className='popup'>
            <NewStory  onClose={() =>setShowStory(false)}  />
          </div>
        </div>
        )}
      </div>
      <div>
        <div className='each-one'>
          {rejection_stories.map(story => (
            <div key={story.id}>
              <div className='thestory'>
                <h2 className='thestory-type'>{story.story_type}</h2>
                <p>{story.story_text}</p> 
                <button onClick={() => handleAnalysisButtonClick(story.id)} className='analysiss'><h3 className='show'>SHOW ANALYSIS</h3></button>
                 <button onClick={() => {
                  setStoryToDelete(story.id);
                  setShowDeletePopup(true);
                }} className='delete-button'>
                  <img src={remove} alt="" />
                </button>
                {showAnalysis && story.id === storyId && (
                  <div className='overlay' ref={overlayReff}>
                    <div className='popup-analysis'>
                      <Analysis storyId={storyId}/>
                      
                    </div>
                    
                  </div>
                  
                )} 
              </div>
            </div>
          ))}
        </div>
        {showDeletePopup && (
      <div className='overlay-delete' ref={deletePopupRef}>
        <div className='popup-delete'>
          <h3>Are you sure you want to delete this story?</h3>
          <div className='popup-delete-buttons'>
            <button onClick={handleDeleteConfirm}>OK</button>
            <button onClick={handleDeleteCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )}
      </div>
      
    </div>
  );
}

export default Drafts;
