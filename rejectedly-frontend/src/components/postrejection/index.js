import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import '../improvedstory/index.css'
import React from 'react'


const PostStory = () => {
  const handleClick = () => {
    window.location.href = '/group';
  };
  
return(
    <div className="story">
        <div className='header collaborate'>
        <h1>POST YOUR REJECTION</h1>
        <button onClick={handleClick} className='all-btn'>CREATE GROUP</button>
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