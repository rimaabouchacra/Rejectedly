import React from 'react';
import Modal from 'react-modal';
import './index.css';
import '../viewcomment/index.css'

Modal.setAppElement('#root');

const ViewContact = ({ isOpen, onRequestClose, contactInfo }) => {
  const { email, phone_number, linkedin_url, biography } = contactInfo;

  return (
    <div className='view-modall'>
      <Modal
        className="modall"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="View Contact"
      >
        <h2 className='view-title'>Contact Information</h2>
        <div className='contact-info'>
          <p className='info-label'>Email:</p>
          <p className='info-value'>{email}</p>
        </div>
        <div className='contact-info'>
          <p className='info-label'>Phone number:</p>
          <p className='info-value'>{phone_number}</p>
        </div>
        <div className='contact-info'>
          <p className='info-label'>LinkedIn URL:</p>
          <p className='info-value'>{linkedin_url}</p>
        </div>
        <div className='contact-info'>
          <p className='info-label'>Biography:</p>
          <p className='info-value'>{biography}</p>
        </div>
        <button className='all-btn close' onClick={onRequestClose}>Close</button>
      </Modal>
    </div>
  );
};

export default ViewContact;
