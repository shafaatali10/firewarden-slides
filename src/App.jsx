import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Intro from "./components/01_Intro.jsx";
import Triangle from "./components/02_FireTriangle.jsx";
import Scenarios from "./components/03_Scenarios.jsx";
import Stages from "./components/04_Stages.jsx";
import Classes from "./components/04_Classes.jsx";
import Extinguishers from "./components/05_Extinguishers.jsx";
import PassTechnique from "./components/06_Pass_Technique.jsx";
import Thankyou from "./components/07_Thankyou.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
          <SwiperSlide><Intro/></SwiperSlide>
          <SwiperSlide><Triangle /></SwiperSlide>
          <SwiperSlide><Scenarios /></SwiperSlide>
          <SwiperSlide><Stages /></SwiperSlide>
          <SwiperSlide><Classes /></SwiperSlide>
          <SwiperSlide><Extinguishers /></SwiperSlide>
          <SwiperSlide><PassTechnique /></SwiperSlide>
          <SwiperSlide><Thankyou /></SwiperSlide>
        </Swiper>
      </>
  )
}

export default App
