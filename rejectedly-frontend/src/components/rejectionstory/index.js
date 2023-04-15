import './index.css'
import '../index.css'

const Story = ()=>{
return (
    <div className="story">
      <div className='header'>
        <h1>MY REJECTED STORIES</h1>
        <button className='all-btn'>NEW STORY</button>
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

export default Story;