import React, { useState } from "react";
import './index.css';
import comment from '../../images/comment.png';
import send from '../../images/send.png';

const Comments = ({ onClick }) => {
  const [comment_text, setCommentText] = useState('');

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  }

  const handleCommentSubmit = () => {
    onClick(comment_text);
    setCommentText('');
  }
  


  return (
    <div className='cmnt-container'>
      <img src={comment} alt="cmnt" />
      <input className="cmnt" placeholder="Write a comment..." value={comment_text} onChange={handleCommentTextChange}></input>
      <img className='cmnt-img' src={send} alt="send" onClick={handleCommentSubmit} />   
    </div>
  );
}

export default Comments;
