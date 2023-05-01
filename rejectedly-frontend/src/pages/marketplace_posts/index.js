import MarketplacePosts from '../../components/marketplaceposts'
import Sidebar from "../../components/sidebar"


const PostMarketplace=()=>{
    return(
        <div>
            <Sidebar activePage="marketplace"/>
            <MarketplacePosts/>
        </div>
    )
}
export default PostMarketplace