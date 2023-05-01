import './index.css'
import React from 'react';
import logo from '../../images/logo1.png'

const Navbar = () => {
return(
<nav className='navbar'>
    <div>
        <img src={logo} alt="logo" />
    </div>
    <div className='links'>
        <a href="/">Home</a>
        <a href="saved">Analysis</a>
        <a href="allposts">Collaboration</a>
        <a href="marketplace">Marketplace</a>
    </div>
    <div className='links-register'>
        <a href="login">Login</a>
        <a  className='signup-btnn' href="signup">Sign up free</a>
    </div>
</nav>  

)


}
export default Navbar