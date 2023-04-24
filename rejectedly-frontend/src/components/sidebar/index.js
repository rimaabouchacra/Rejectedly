import './index.css'
import logo2 from '../../images/logo2.png'


const Sidebar = ({ activePage }) => {
  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={logo2} alt="logo" />
      </div>
      <ul>
        <li className={activePage === 'analysis' ? 'active' : ''}><a href='analysis'>MY STORIES</a></li>
        <li className={activePage === 'profile' ? 'active' : ''}><a href='profile'>EDIT PROFILE</a></li>
        <li className={activePage === 'marketplace' ? 'active' : ''}><a href='marketplace'>MARKETPLACE</a></li>
        <li className={activePage === 'collaboration' ? 'active' : ''}><a href='collaboration'>COLLABORATION</a></li>
        <li className='li'><a href='/'>LOGOUT</a></li>
       
      </ul>
    </div>
  );
};


export default Sidebar;