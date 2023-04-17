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
             <a href="home">Home</a>
             <a href="analysis">Analysis</a>
        </div>
         <div className='link-division'>
            <a href="collaboration">Collaboration</a>
            <a href="marketplace">Marketplace</a>
        </div>
        <div className='link-division'>
            <a href="signup">Signup</a>
            <a href="login">Login</a>
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