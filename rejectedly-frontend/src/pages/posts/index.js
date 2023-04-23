import Sidebar from "../../components/sidebar"
import Posts from "../../components/myposts"
const AllPosts=()=>{
    return(
        <div>
            
            <Sidebar activePage="collaboration"/>
            <Posts/>
        </div>
    )
}
export default AllPosts