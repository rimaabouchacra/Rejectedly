import AboutUs from '../../components/about';
import Header from '../../components/header';
import Navbar from '../../components/navbar'
import Platform from '../../components/platform-features';
import Testimonials from '../../components/testimonials';
const Homepage=()=>{
    return(
        <div>
          <Navbar/>
          <Header/>
          <Platform/>
          <Testimonials/>
          <AboutUs/>
        </div>
    )
}
export default Homepage;