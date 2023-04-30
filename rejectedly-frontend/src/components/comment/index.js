import './index.css'
import '../newstory/index.css'
import comment from '../../images/comment.png'
import send from '../../images/send.png'


const Comments = ()=>{

return (
  <div>
    <img className="search-img" src={comment} alt="cmnt" />
    <input className="input type search-text" placeholder="Write a comment..."></input>
    <img className="search-img" src={send} alt="send" />   
  </div>
);


}
export default Comments