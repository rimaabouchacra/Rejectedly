// import Saved from "../../components/savedstories";
import Drafts from "../../components/drafts";
import Sidebar from "../../components/sidebar";


const SaveAnalysis=()=>{
    return(
        <div>
          <Sidebar activePage="saved"/>  
          {/* <Saved/> */}
          <Drafts/>
        </div>
    )
}
export default SaveAnalysis;