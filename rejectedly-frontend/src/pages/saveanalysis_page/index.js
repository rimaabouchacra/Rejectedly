import Saved from "../../components/savedstories";
import Sidebar from "../../components/sidebar";


const SaveAnalysis=()=>{
    return(
        <div>
          <Sidebar activePage="saved"/>  
          <Saved/>
        </div>
    )
}
export default SaveAnalysis;