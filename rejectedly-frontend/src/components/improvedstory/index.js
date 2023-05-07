import './index.css'
import '../index.css'
import '../rejectionstory/index.css'
import '../newstory/index.css'
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostImprovedStory = () => {

  
  const [story_type, setType] = useState("");
  const [story_text, setText] = useState("");
  const [story_text_improved, setTextImproved] = useState("");
  

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleTextChangee = (e) => {
    setTextImproved(e.target.value);
  }
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    const formData = new FormData();
    formData.append('story_type', story_type);
    formData.append('story_text', story_text);
    formData.append('story_text_improved', story_text_improved);
    
  
    axios.post("http://localhost:8000/api/v1/auth/rejection-stories/improved", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("Story added successfully!")
        
        navigate('/marketplaceposts');
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error adding story")
      });
  };      
return(
    <form className="story"  onSubmit={handleSubmit}>
    <div className='header'>
        <h1>REJECTION-TO-OPPORTUNITY MARKETPLACE</h1>
    </div>
    <div className='new-story improved'>
        <div className='label-input'>
            <label className='label3 type' htmlFor="type">Rejection type</label>
            <select className='input type' name="types" id="type" value={story_type} onChange={handleTypeChange}>
                <option value="Select">---Select Rejection type</option>
                <option value="Job Application">Job Application</option>
                <option value="Proposal">Proposal</option>
                <option value="Project Idea">Project Idea</option>
            </select><br/>
        </div>
 
        <label className='label3 before' htmlFor="story">Rejected idea or project before improvement</label>
        <textarea className='textarea12' name="textarea" id="story" cols="30" rows="10" value={story_text} onChange={handleTextChange}></textarea>
        <label className='label3 after' htmlFor="story">Rejected idea or project after improvement</label>
        <textarea className='textarea12' name="textarea" id="story" cols="30" rows="10" value={story_text_improved} onChange={handleTextChangee}></textarea>
        <button className='all-btn'>POST</button>
    </div>
    </form>
)
}
export default PostImprovedStory