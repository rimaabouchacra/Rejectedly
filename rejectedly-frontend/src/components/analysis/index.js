// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import '../index.css';


// const Analysis = () => {
//   const [showAnalysis, setShowAnalysis] = useState(true);
//   const overlayRef = useRef(null);

//   function handleOverlayClick2(e) {
//     if (e.target === overlayRef.current) {
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
//     <div>
//       {showAnalysis && (
//         <div className="analysis" ref={overlayRef}>
//           <h1>ANALYSIS</h1>
//           <h3 className='analysis-type'>
//             Analysis type
//           </h3>
//           <div>
//             <p>
//               Where does it come from? Contrary to popular belief, Lorem Ipsum
//               is not simply random text. It has roots in a piece of classical
//               Latin literature from 45 BC, making it over 2000 years old.
//               Richard McClintock, a Latin professor at Hampden-Sydney College
//               in Virginia, looked up one of the more obscure Latin words,
//               consectetur, from a Lorem Ipsum passage, and going through the
//               cites of the word in classical literature, discovered the
//               undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//               1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
//               and Evil) by Cicero, written in 45 BC. This book is a treatise
//               on the theory of ethics, very popular during the Renaissance.
//               The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
//               comes from a line in section 1.10.32.
              
//             </p>
//           </div>
//           <button className="all-btn" onClick={() => setShowAnalysis(false)}>
//             CLOSE
//           </button>
   
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;


//importanttt
// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import '../index.css';
// import { useLocation } from 'react-router-dom';

// const Analysis = (props) => {
//   const location = useLocation();
//   const [showAnalysis, setShowAnalysis] = useState(true);
//   const overlayRef = useRef(null);

//   function handleOverlayClick2(e) {
//     if (e.target === overlayRef.current) {
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
//     <div>
//       {showAnalysis && (
//         <div className="analysis" ref={overlayRef}>
//           <h1>ANALYSIS</h1>
//           <h3 className='analysis-type'>
//             Analysis type: {location.state.selectedType}
//           </h3>
//           <div>
//             <p>
//               {location.state.generatedText}
//             </p>
//           </div>
//           <button className="all-btn" onClick={() => setShowAnalysis(false)}>
//             CLOSE
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

//importantttt

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import './index.css';
// import '../index.css';

// const Analysis = (props) => {
//   const [showAnalysis, setShowAnalysis] = useState(true);
//   const [storyTextImproved, setStoryTextImproved] = useState("");
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/v1/auth/rejection-stories/${props.storyId}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
//     .then(response => {
//       setStoryTextImproved(response.data.story.story_text_improved);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, [props.storyId]);

//   function handleOverlayClick2(e) {
//     if (e.target === overlayRef.current) {
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
//     <div>
//       {showAnalysis && (
//         <div className="analysis" ref={overlayRef}>
//           <h1>ANALYSIS</h1>
//           <h3 className='analysis-type'>
//             Analysis type: {props.selectedType}
//           </h3>
//           <div>
//             <p>
//               {storyTextImproved}
//             </p>
//           </div>
//           <button className="all-btn" onClick={() => setShowAnalysis(false)}>
//             CLOSE
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;

// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import axios from 'axios';

// const Analysis = ({ storyId }) => {
//   const [showAnalysis, setShowAnalysis] = useState(true);
//   const overlayRef = useRef(null);
//   const [storyDetails, setStoryDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   function handleOverlayClick2(e) {
//     if (e.target === overlayRef.current) {
//       setShowAnalysis(false);
//     }
//   }

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/v1/auth/rejection-stories-user/${storyId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       })
//       .then((response) => {
//         setStoryDetails(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       });
//   }, [storyId]);

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOverlayClick2);
//     return () => {
//       document.removeEventListener('mousedown', handleOverlayClick2);
//     };
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {!isLoading && showAnalysis && (
//         <div className="analysis" ref={overlayRef}>
//           <h1>ANALYSIS</h1>
//           <h3 className="analysis-type">{storyDetails ? storyDetails.story_type : ''}</h3>
//           <div>
//             <p>{storyDetails ? storyDetails.story_text_improved : ''}</p>
//           </div>
//           <button className="all-btn" onClick={() => setShowAnalysis(false)}>
//             CLOSE
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;

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
