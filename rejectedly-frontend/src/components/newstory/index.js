import './index.css'
import '../index.css'
import React from 'react';

const NewStory = () => {
return(
    <div className='new-story'>
        <h1>NEW STORY</h1>
        <label className='label2' htmlFor="type">Story type</label>
        <select className='input type' name="types" id="type">
            <option value="Select">Select Rejection type</option>
            <option value="JobApplication">Job Application</option>
            <option value="Proposal">Proposal</option>
            <option value="ProjectIdea">Project Idea</option>
        </select><br/>
        <label className='label1' htmlFor="story">Tell us what happened</label>
        <textarea name="textarea" id="story" cols="30" rows="10"></textarea>
        <button className='all-btn'>SAVE&ANALYZE</button>
    </div>
)
}
export default NewStory