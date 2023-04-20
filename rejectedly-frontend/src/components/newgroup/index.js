import React from "react";
import './index.css'
import '../rejectionstory/index.css'
import groupImg from '../../images/group.png'
import search from '../../images/search.png'
import comment from '../../images/comment.png'
import send from '../../images/send.png'
import arrow from '../../images/arrow.png'
import '../newstory/index.css'
import '../improvedstory/index.css'

const Group = () => {

    return (
    <div className="story">
         <div className="headergroup">
            <img src={groupImg} alt="grpImg" />
            <h1>NEW GROUP</h1>
        </div>
    <div className='new-story'>
        <div className='label-input'>
            <label htmlFor="name">Group name</label>
            <input className='input type' type="text"/> 
        </div>
        <div className='label-input'>
            <label  htmlFor="description">Group description</label>
            <textarea name="textarea" id="description" cols="30" rows="5"></textarea>
        </div>
         <div className='label-input'>
            <label htmlFor="members">Group members</label>
            <div className='input type search'>
                <img className="search-img" src={search} alt="search" />
                <input className="input type search-text" placeholder="Search members to invite..."></input>
            </div>  
        </div>
        <div>
            <button className='all-btn'>SAVE</button>
        </div>
        <div className='input type search'>
                <img className="search-img" src={comment} alt="cmnt" />
                <input className="input type search-text" placeholder="Write a comment..."></input>
                <img className="search-img" src={send} alt="send" />
        </div>  
        <div className="view">
            <img src={arrow} alt="" />
            <p>View comment</p>
        </div>
    </div>
    </div>
  );
}

export default Group;
