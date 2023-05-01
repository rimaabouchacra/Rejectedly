import Sidebar from "../../components/sidebar"
import Posts from "../../components/myposts"
const AllPosts=()=>{
    return(
        <div>
            <Sidebar activePage="posts"/>
            <Posts/>
        </div>
    )
}
export default AllPosts