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
        <h2 className='view-titlee'>Contact Information</h2>
        <div className='bio'>
          <h3 className='bio-title'>Biography:</h3>
          <p className='bio-text'>{biography}</p>
        </div>
        <div className='all-info'>
            <div className='contact-info'>
               <p className='info'>Email:</p>
               <p>{email}</p>
            </div>
            <div className='contact-info linkk'>
               <p className='info'>Phone number:</p>
               <p>{phone_number}</p>
            </div>
            <div className='contact-info linkk'>
               <p className='info'>LinkedIn URL:</p>
               <p><a className='linkedin' href={linkedin_url}>{linkedin_url}</a></p>
            </div>
        </div>
        
        
        <button className='all-btn close' onClick={onRequestClose}>Close</button>
      </Modal>
    </div>
  );
};

export default ViewContact;
