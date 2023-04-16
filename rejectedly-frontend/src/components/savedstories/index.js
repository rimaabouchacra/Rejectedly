import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import './index.css'
import '../index.css'
import '../rejectionstory/index.css'


const Saved = () => {
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
        <div class="grid-container">
          <div class="grid-item">
            <h3>Story type</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
          <div class="grid-item">6</div>
        </div>
    </div>
  );
}

export default Saved;
