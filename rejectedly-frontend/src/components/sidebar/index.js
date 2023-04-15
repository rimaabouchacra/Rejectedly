import './index.css'
import logo2 from '../../images/logo2.png'


const Sidebar = ()=>{
return (
    <div className="sidebar">
      
      <div className='logo'>
        <img src={logo2} alt="logo" />
      </div>
        
      <ul>
        <li><a href='stories'>MY STORIES</a></li>
        <li><a href='profile'>EDIT PROFILE</a></li>
        <li><a href='marketplace'>MARKETPLACE</a></li>
        <li><a href='collaboration'>COLLABORATION</a></li><br/><br/><br/><br/><br/><br /><br />
        <li className='li'><a href='/'>LOGOUT</a></li>
      </ul>
    </div>
    );
}

export default Sidebar;