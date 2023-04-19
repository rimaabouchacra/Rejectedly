import Sidebar from "../../components/sidebar"
import EditProfile from "../../components/editprofile";
const Profile=()=>{
    return(
        <div>
            <Sidebar activePage="profile"/>
            <EditProfile/>
        </div>
    )
}
export default Profile;