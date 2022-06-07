
import logo_blue from '../images/logo_blue.png';
import Shlang from "../images/shlang.png";
import '../Css/style.css';
import Banner from '../Components/Banner';
import AboutUS from '../Components/AboutUS';
import Activity from '../Components/Activity';
import Expert from '../Components/Expert';
import Services from '../Components/Services';
import CarouselLine from '../Components/CarouselLine';
import Robot from '../Components/Robot';
import Partners from '../Components/Partners';
import Form from '../Components/Form';
import Formblock from '../Components/Formblock';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className="App">
      <Banner info="Samarqand viloyati yoshlar texnoparki" image2={Shlang}  image={logo_blue} button="zamonaviy  ilm  poydevori !" />
      <AboutUS/>
      <Activity/>
      <Expert/>
      <Services/>
      <div className='carousel_line'>
      <CarouselLine/>
      </div>
      <Robot/>
      <Partners />
      <Formblock/>
      <Footer/>
    </div>
  );
}

export default Home;
