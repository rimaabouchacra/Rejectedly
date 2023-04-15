import './index.css'
import React from 'react';
import fcb from '../../images/fcb.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'

const Footer = () => {
return(
<div className='footer'>
    <h2 className='footer-title'>Website Links</h2>
    <div className='footer-links'>
        <div className='link-division'>
             <a href="_blank">Home</a>
             <a href="#">Analysis</a>
        </div>
         <div className='link-division'>
            <a href="#">Collaboration</a>
            <a href="#">Marketplace</a>
        </div>
        <div className='link-division'>
            <a href="#">Signup</a>
            <a href="#">Login</a>
        </div> 

    </div>
    <h2 className='footer-title'>Follow us</h2>
    <div className='social-media'>
        <img src={fcb} alt="fcb" />
        <img src={insta} alt="insta" />
        <img src={linkedin} alt="linkedin" />
    </div>
</div>  

)


}
export default Footer