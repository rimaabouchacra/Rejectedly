import './index.css'
import '../index.css'

const Story = ()=>{
return (
    <div className="story">

      <div className='header'>
          <h1>MY REJECTED STORIES</h1>
          <button className='all-btn'>NEW STORY</button>
      </div>
      <div className='text'>
          <h2 className='textt'>NO STORIES YET</h2>
          <p className='textt'>Rejectedly gives you the opportunity to upload your rejection story for analysis using AI, so that you identify the points that need improvements. You will receive actionable suggestions on how to improve my approach, so that I can implement changes and see better results.</p>
          <button className='all-btn'>NEW STORY</button>
      </div>
    </div>
    );
}

export default Story;