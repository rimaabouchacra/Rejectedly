import '../newstory/index.css'
import '../newgroup/index.css'
import './index.css'
import '../index.css'
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
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
        <div className='commented' key={index}>
            <p className='view-name'>{comment.user_name}</p>
            <p>{comment.comment_text}</p>
        </div>
        ))
        ) : (
        <p className='no-comment'>No comments yet.</p>
       )}

      </div>
      <button className='all-btn close' onClick={onRequestClose}>Close</button>
    </Modal>
  </div>
     
     
 

);


}
export default ViewComments