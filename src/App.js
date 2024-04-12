// import logo from './logo.svg';
import './App.css';
import NavScrollExample from './Components/Nav';
import NavBadge from './Pages/NavBadge';
import Banner from './Pages/Banner/Banner';
import MainBadge from './Pages/MainBadge';
import Copilot from './Pages/copilot/Copilot';
import EmailCalender from './Pages/EmailCalender/EmailCalender';
import Security from './Pages/Security/Security';
import Excel from './Pages/Products/Excel';
import Accessible from './Pages/Accessible/Accessible';
import Expand from './Pages/Expand-Oulook/Expand';
import Mobile from './Pages/Mobile/Mobile';
import Hotmail from './Pages/Hotmail/Hotmail';
import Icon from './Pages/Icon';
import Footer from './Pages/Footer/Footer';
// import User from './Pages/User';
// import Carousel from './Pages/Swiper';


function App() {
  return (
   <>
   <NavScrollExample />
   <NavBadge />
   <Banner />
   <MainBadge />
   <Copilot />
   <EmailCalender />
   <Security />
   {/* <User /> */}
   {/* <Carousel /> */}
   <Excel />
   <Accessible />
   <Expand />
   <Mobile />
   <Hotmail />
   <Icon />
   <Footer />
   </>
  );
}

export default App;
