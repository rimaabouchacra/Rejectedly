import './index.css'
import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import React from 'react';

const PostImprovedStory = () => {
return(
    <div className="story">
    <div className='header'>
        <h1>REJECTION-TO-OPPORTUNITY MARKETPLACE</h1>
    </div>
    <div className='new-story improved'>
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
        <textarea className='textarea12' name="textarea" id="story" cols="30" rows="10"></textarea>
        <label className='label3 after' htmlFor="story">Rejected idea or project after improvement</label>
        <textarea className='textarea12' name="textarea" id="story" cols="30" rows="10"></textarea>
        <button className='all-btn'>POST</button>
    </div>
    </div>
)
}
export default PostImprovedStory