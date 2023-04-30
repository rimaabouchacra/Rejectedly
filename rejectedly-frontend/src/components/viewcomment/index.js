import './index.css'
import '../newstory/index.css'
import comment from '../../images/comment.png'
import send from '../../images/send.png'


const Comments = ()=>{

return (
  <div className='cmnt-container'>
    <img src={comment} alt="cmnt" />
    <input className="cmnt" placeholder="Write a comment..."></input>
    <img className='cmnt-img' src={send} alt="send" />   
  </div>


);


}
export default Comments