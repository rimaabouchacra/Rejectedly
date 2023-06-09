import './index.css'
import React from 'react';
import fcb from '../../images/fcb.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import logo1 from '../../images/logo1.png'
const Footer = () => {
const token = localStorage.getItem('token');
return(
<div className='footer'>
    <div className='footer-section1'>
        <div className='r-title'>
            <h3 className='footer-title'>REJECTEDLY</h3>
        </div>
        <div className='footer-links'>
            <a href="/">Home</a>
            {token ? (
          <>
            <a href='saved'>Analysis</a>
            <a href='allposts'>Collaboration</a>
            <a href='marketplaceposts'>Marketplace</a>
          </>
        ) : (
          <>
          <a href='/login'>Analysis</a>
          <a href='/login'>Collaboration</a>
          <a href='/login'>Marketplace</a>
          </>
        )}
            <a href="signup">Signup</a>
            <a href="login">Login</a>
        </div>
        
    </div>
    <div className='footer-section2'>
        <div>
           <img src={logo1} alt="logo" />
        </div>
        
    <div className='social-media'>
        <img className='social-icon' src={fcb} alt="fcb" />
        <img className='social-icon'  src={insta} alt="insta" />
        <img className='social-icon'  src={linkedin} alt="linkedin" />
    </div>
    </div>
    
</div>  

)


}
export default Footer