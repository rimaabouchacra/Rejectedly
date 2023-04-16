import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import './index.css'
import '../index.css'


const Story = () => {
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

  return (
    <div className="story">
      <div className='header'>
        <h1>MY REJECTED STORIES</h1>
        <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
      </div>
      <div className='text'>
        <h2 className='textt'>NO STORIES YET</h2>
        <p className='textt'>Rejectedly gives you the opportunity to upload your rejection story for analysis using AI, so that you identify the points that need improvements. You will receive actionable suggestions on how to improve my approach, so that I can implement changes and see better results.</p>
        <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
      </div>
      {showStory && (
        <div className='overlay' ref={overlayRef}>
          <div className='popup'>
            <NewStory />
          </div>
        </div>
      )}
    </div>
  );
}

export default Story;
