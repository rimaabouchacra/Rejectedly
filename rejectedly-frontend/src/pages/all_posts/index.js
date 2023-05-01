import AllPosts from "../../components/allposts"
import Sidebar from "../../components/sidebar"



const PostAllStories=()=>{
    return(
        <div>
            <Sidebar activePage="collaboration"/>
            <AllPosts/>
        </div>
    )
}
export default PostAllStories