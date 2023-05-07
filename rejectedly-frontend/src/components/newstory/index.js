import './index.css'
import '../index.css'
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewStory = (props) => {
  const [story_type, setType] = useState("");
  const [story_text, setText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const handleChatgptResponse = () => {
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
        const generatedText = response.data.choices[0].text;
        setGeneratedText(generatedText);
        setSelectedType(story_type);
        console.log('Story analyzed successfully!');
        window.location.reload();
        
       
      })
      .catch((error) => {
        console.log('Error analyzing story');
        
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChatgptResponse();
    
  };

  return (
    <>
      <form className='new-story' onSubmit={handleSubmit}>
        <h1>NEW STORY</h1>
        <div className='label-input'>
          <label htmlFor="type">Story type</label>
          <select className='input type' name="type" id="story_type" value={story_type} onChange={handleTypeChange}>
            <option value="Select">Select Rejection type</option>
            <option value="Job Application">Job Application</option>
            <option value="Proposal">Proposal</option>
            <option value="Project Idea">Project Idea</option>
          </select><br/>
        </div>
        <div className='label-input'>
          <label htmlFor="story">Tell us what happened</label>
          <textarea name="textarea" id="story" cols="30" rows="10" value={story_text} onChange={handleTextChange}></textarea>
        </div>
        <button className='all-btn' type="submit">SAVE&ANALYZE</button>
      </form>
    </>
  );
};

export default NewStory;
