import React, { useState } from 'react';
import Modal from 'react-modal';
import './index.css';
import Delete from '../../images/delete.png'


Modal.setAppElement('#root');

const ViewComments = ({ isOpen, onRequestClose, comments, onDeleteComment }) => {
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleDeleteClick = (commentId) => {
    setSelectedCommentId(commentId);
  };

  const handleConfirmDeleteClick = () => {
  if (selectedCommentId) {
    onDeleteComment(selectedCommentId);
    setSelectedCommentId(null);
    onRequestClose(); // close the delete confirmation modal
  }
};

  

  return (
    <div className='view-modal'>
      <Modal
        className='modal'
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel='View Comments'
      >
        <h2 className='view-title'>All Comments</h2>
        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div className='commented' key={comment.id}>
                <p className='view-name'>{comment.user_name}</p>
                <p>{comment.comment_text}</p>
                <img 
                className='trash'
                src={Delete} alt=""
                onClick={() => handleDeleteClick(comment.id)} />
                
              </div>
            ))
          ) : (
            <p className='no-comment'>No comments yet.</p>
          )}
        </div>
        <div className='delete-modal'>
          <Modal className="modal modal-delete"
            isOpen={selectedCommentId !== null}
            onRequestClose={() => setSelectedCommentId(null)}
            contentLabel='Delete Comment'
          >
           <h4 className='delete-title'>Are you sure you want to delete this comment?</h4>
            <div className='delete-buttons'>
              <button className='delete-btn yes' onClick={onDeleteComment}>
                Yes
              </button>
              <button className='delete-btn no' onClick={() => setSelectedCommentId(null)}>
                No
              </button>
            </div>
            
          </Modal>
        </div>
        <button className='all-btn close' onClick={onRequestClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ViewComments;
