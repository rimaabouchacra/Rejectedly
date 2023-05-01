import PostEmpty from "../../components/postrejectionempty"
import Sidebar from "../../components/sidebar"
// import PostStory from "../../components/postrejection"
const PostYourStory=()=>{
    return(
        <div>
            <Sidebar activePage="collaboration"/>
            {/* <PostStory/> */}
            <PostEmpty/>
        </div>
    )
}
export default PostYourStory