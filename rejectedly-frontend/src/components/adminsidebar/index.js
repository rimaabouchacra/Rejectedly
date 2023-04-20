import './index.css'
import logo2 from '../../images/logo2.png'


const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={logo2} alt="logo" />
      </div>
      <ul>
        <li><a href='saved'>DASHBOARD</a></li>
        <li className='users'><a href='admin'>GET USERS</a></li>
        <li className='li lii'><a href='/'>LOGOUT</a></li>
      </ul>
    </div>
  );
};


export default AdminSidebar;