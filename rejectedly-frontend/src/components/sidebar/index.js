import './index.css'
import logo2 from '../../images/logo2.png'
const Sidebar = ()=>{


return (
    <div className="sidebar">
        <img src={logo2} alt="logo" />
      <ul>
        <li><a href='stories'>MY STORIES</a></li>
        <li><a href='profile'>EDIT PROFILE</a></li>
        <li><a href='marketplace'>MARKETPLACE</a></li>
        <li><a href='collaboration'>COLLABORATION</a></li>
      </ul>
    </div>
    );
}

export default Sidebar;