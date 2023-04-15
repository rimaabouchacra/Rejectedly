import AboutUs from '../../components/about';
import Footer from '../../components/footer';
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
          <Footer/>
        </div>
    )
}
export default Homepage;