import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import '../improvedstory/index.css'
import React, { useState, useRef, useEffect } from 'react';
import Group from '../newgroup';


const PostStory = () => {
  const [showGroup, setShowGroup] = useState(false);
  const overlayRef3 = useRef(null);

  function handleButtonClick3() {
    setShowGroup(true);
  }

  function handleOverlayClick3(e) {
    if (e.target === overlayRef3.current) {
      setShowGroup(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick3);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick3);
    };
  }, []);

return(
    <div className="story">
        <div className='header collaborate'>
        <h1>POST YOUR REJECTION</h1>
        <button onClick={handleButtonClick3} className='all-btn'>CREATE GROUP</button>
        {showGroup && (
        <div className='overlay' ref={overlayRef3}>
          <div className='popup'>
            <Group/>
          </div>
        </div>
      )}
        </div>
    <div className='new-story'>
        
        <div className='label-input'>
            <label className='label3 type' htmlFor="type">Rejection type</label>
            <select className='input type' name="types" id="type">
                <option value="Select">---Select Rejection type</option>
                <option value="JobApplication">Job Application</option>
                <option value="Proposal">Proposal</option>
                <option value="ProjectIdea">Project Idea</option>
            </select><br/>
        </div>
 
        <label className='label3 before' htmlFor="story">Rejected idea or project before improvement</label>
        <textarea className='textarea-before' name="textarea" id="story" cols="30" rows="10"></textarea>
        <button className='all-btn'>POST</button>
    </div><br /><br />
    </div>
)
}
export default PostStory