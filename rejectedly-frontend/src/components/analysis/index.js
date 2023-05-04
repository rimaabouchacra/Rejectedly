import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import axios from 'axios';

const Analysis = ({ storyId }) => {
  const [showAnalysis, setShowAnalysis] = useState(true);
  const overlayRef = useRef(null);
  const [storyDetails, setStoryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleOverlayClick2(e) {
    if (e.target === overlayRef.current) {
      setShowAnalysis(false);
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/auth/rejection-stories-user/${storyId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => {
        setStoryDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [storyId]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick2);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick2);
    };
  }, []);
  

   function handleButtonClick() {
    setButtonClicked(true);
    setShowAnalysis(false);
  }
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && showAnalysis && (
        <div className="analysis" ref={overlayRef}>
          <h1>ANALYSIS</h1>
          <h3 className="analysis-type">{storyDetails ? storyDetails.story_type : ''}</h3>
          <div>
            <p>{storyDetails ? storyDetails.story_text_improved : ''}</p>
          </div>
          <button
            className="all-btn"
            onClick={handleButtonClick}
            disabled={buttonClicked}
          >
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
};

export default Analysis;
