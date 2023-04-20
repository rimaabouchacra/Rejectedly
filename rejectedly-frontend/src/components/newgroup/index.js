import React from "react";
import './index.css'
import '../rejectionstory/index.css'
import groupImg from '../../images/group.png'
import '../newstory/index.css'

const Group = () => {

    return (
    <div className="story">
     <div className='new-story'>
        <div className="headergroup">
            <img src={groupImg} alt="grpImg" />
            <h1>NEW GROUP</h1>
        </div>
        
        <div className='label-input'>
            <label htmlFor="name">Group name</label>
            <input className='input type' type="text"/> 
        </div>
        <div className='label-input'>
            <label  htmlFor="description">Group description</label>
            <textarea name="textarea" id="description" cols="30" rows="10"></textarea>
        </div>
        <button className='all-btn'>SAVE</button>
    </div>
    </div>
  );
}

export default Group;
