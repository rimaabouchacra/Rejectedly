import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../viewcomment/index.css';

Modal.setAppElement('#root');

const ViewCount = ({ isOpen, onRequestClose }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const response = await axios.get('http://localhost:8000/api/v1/auth/users/count');
      setCount(response.data.count);
    };
    fetchCount();
  }, []);

  return (
    <div className='view-modal'>
      <Modal
        className='modal'
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel='View Count'
      >
        <h2 className='view-titlee'>Total Users</h2>
        <div className='bio'>
          <p>{count}</p>
        </div>
        <button className='all-btn close' onClick={onRequestClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ViewCount;

