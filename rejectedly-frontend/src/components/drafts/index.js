// import './index.css'
// import axios from 'axios';
// import React, { useState, useRef, useEffect } from 'react';
// import NewStory from '../newstory';
// import '../index.css'
// import '../rejectionstory/index.css'
// import '../analysis/index.css'
// import '../newstory/index.css'
// import Analysis from '../analysis';

// const Drafts = () => {
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
//   const [rejection_stories, setRejectionStories] = useState([]);

//   useEffect(() => {
    
//     axios.get('http://localhost:8000/api/v1/auth/rejection-stories-user', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     })
//     .then(response => {
//       setRejectionStories(response.data.not_improved_stories);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   return (
//     <div className="post-container">
//       <div className='header draft'>
//         <h1>SAVED REJECTIONS</h1>
//         <button onClick={handleButtonClick} className='all-btn'>NEW STORY</button>
//           {showStory && (
//         <div className='overlay' ref={overlayRef}>
//           <div className='popup'>
//             <NewStory />
//           </div>
//         </div>
//         )}
//       </div>
//       <div>
//         <div className='each-one'>
//             {rejection_stories && rejection_stories.map(story => (
//           <div key={story.id}>
//             <div className='thestory'>
//                 <h3>{story.story_type}</h3>
//                 <p>{story.story_text}</p> 
//                 <button onClick={handleButtonClick2} className='analysiss'><h3>SHOW ANALYSIS</h3></button>
//             {showAnalysis && (
//         <div className='overlay' ref={overlayReff}>
//           <div className='popup-analysis'>
//             <Analysis />
//           </div>
//         </div>
//         )} 
//             </div>
            
//           </div>
//         ))}
//         </div>
        

//       </div>
//     </div>
//   );
// }


// export default Drafts;


import './index.css'
import '../index.css'
import axios from "axios";
import React, { useState } from "react";
import Analysis from '../analysis';
import { useNavigate } from "react-router-dom";

const NewStory = (props) => {
  const [story_type, setType] = useState("");
  const [story_text, setText] = useState("");
  const [analysisData, setAnalysisData] = useState(null);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleChatgptResponse=()=>{
    const data = {
      story_type: story_type,
      story: story_text
    };

    axios.post('http://localhost:8000/api/v1/auth/chatgpt-interpret', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.data);
        setAnalysisData(response.data); // Set the analysis data state
        console.log('Story analyzed successfully!');
        
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log('Error analyzing story');
        // TODO: handle error response data
      });
  }
  
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
  
    const formData = new FormData();
    formData.append('story_type', story_type);
    formData.append('story_text', story_text);
    
  
    axios.post("http://localhost:8000/api/v1/auth/rejection-stories", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("Story added successfully!")
        
        navigate('/saved');
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error adding story")
      });
  };
  
  return(
    <>
      <form className='new-story' onSubmit={handleSubmit}>
          <h1>NEW STORY</h1>
          <div className='label-input'>
              <label htmlFor="type">Story type</label>
              <select className='input type' name="type" id="story_type" value={story_type} onChange={handleTypeChange}>
                <option value="Select">Select Rejection type</option>
                <option value="JobApplication">Job Application</option>
                <option value="Proposal">Proposal</option>
                <option value="ProjectIdea">Project Idea</option>
              </select><br/>
          </div>
          <div className='label-input'>
              <label  htmlFor="story">Tell us what happened</label>
              <textarea name="textarea" id="story" cols="30" rows="10" value={story_text} onChange={handleTextChange}></textarea>
          </div>
          <button className='all-btn' onClick={handleChatgptResponse}>SAVE&ANALYZE</button>
      </form>
      
      {analysisData && <Analysis data={analysisData} />} {/* Pass the analysis data as a prop */}
    </>
  )
}

export default NewStory





