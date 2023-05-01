import '../newstory/index.css'
import '../newgroup/index.css'
import './index.css'
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ViewComments = ({ isOpen, onRequestClose, comments })=>{

return (
  <div className='view-modal'>
    <Modal className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="View Comments"
    >
      <h2 className='view-title'>All Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <div key={index}>
            <p className='view-name'>{comment.user_name}</p>
            <p>{comment.comment_text}</p>
          </div>
        ))}
      </ul>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  </div>
     
     
 

);


}
export default ViewComments