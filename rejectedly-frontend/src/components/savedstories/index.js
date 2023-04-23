// import React, { useState, useRef, useEffect } from 'react';
// import NewStory from '../newstory';
// import './index.css'
// import '../index.css'
// import '../rejectionstory/index.css'
// import Analysis from '../analysis';


// const Saved = () => {
//   const [showStory, setShowStory] = useState(false);
//   const overlayRef = useRef(null);

//   function handleButtonClick() {
//     setShowStory(true);
//   }

//   function handleOverlayClick(e) {
//     if (e.target === overlayRef.current) {
//       setShowStory(false);
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOverlayClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOverlayClick);
//     };
//   }, []);


//   const [showAnalysis, setShowAnalysis] = useState(false);
//   const overlayReff = useRef(null);

//   function handleButtonClick2() {
//     setShowAnalysis(true);
//   }

//   function handleOverlayClick2(e) {
//     if (e.target === overlayReff.current) {
//       setShowAnalysis(false);
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOverlayClick2);
//     return () => {
//       document.removeEventListener('mousedown', handleOverlayClick2);
//     };
//   }, []);

//   return (
//     <div className="story">
//         <div className='header'>
//           <h1>MY REJECTED STORIES</h1>
//           <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
//           {showStory && (
//         <div className='overlay' ref={overlayRef}>
//           <div className='popup'>
//             <NewStory />
//           </div>
//         </div>
//         )}
//         </div>
//         <div className="grid-container">
//           <div className="grid-item">
//             <h3>Story type</h3>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//             <button onClick={handleButtonClick2} className='analysiss'><h3>SHOW ANALYSIS</h3></button>
//             {showAnalysis && (
//         <div className='overlay' ref={overlayReff}>
//           <div className='popup-analysis'>
//             <Analysis />
//           </div>
//         </div>
//         )}
//           </div>
//           <div className="grid-item">2</div>
//           <div className="grid-item">3</div>
//           <div className="grid-item">4</div>
//           <div className="grid-item">5</div>
//           <div className="grid-item">6</div>
//           <div className="grid-item">4</div>
//           <div className="grid-item">6</div>
//           <div className="grid-item">5</div>
//           <div className="grid-item">4</div>
//           <div className="grid-item">6</div>
//           <div className="grid-item">5</div>
//           <div className="grid-item">4</div>
//           <div className="grid-item">6</div>
//           <div className="grid-item">5</div>
//         </div>
//     </div>
//   );
// }

// export default Saved;

import React, { useState, useRef, useEffect } from 'react';
import NewStory from '../newstory';
import './index.css';
import '../index.css';
import '../rejectionstory/index.css';
import Analysis from '../analysis';
import axios from 'axios';

const Saved = () => {
  const [showStory, setShowStory] = useState(false);
  const overlayRef = useRef(null);
  const [stories, setStories] = useState([]);

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

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/auth/rejection-stories')
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  let storyElements = [];

  for (let i = 0; i < stories.length; i++) {
    const story = stories[i];
    const element = (
      <div key={story.id} className="grid-item">
        <h3>{story.title}</h3>
        <p>{story.content}</p>
        <button onClick={handleButtonClick2} className="analysiss">
          <h3>SHOW ANALYSIS</h3>
        </button>
        {showAnalysis && (
          <div className="overlay" ref={overlayReff}>
            <div className="popup-analysis">
              <Analysis />
            </div>
          </div>
        )}
      </div>
    );
    storyElements.push(element);
  }

  return (
    <div className="story">
      <div className="header">
        <h1>MY REJECTED STORIES</h1>
        <button onClick={handleButtonClick} className="all-btn">
          NEW STORY
        </button>
        {showStory && (
          <div className="overlay" ref={overlayRef}>
            <div className="popup">
              <NewStory />
            </div>
          </div>
        )}
      </div>
      <div className="grid-container">
        {storyElements}
      </div>
    </div>
  );
};

export default Saved;



