
import "./App.css";
import 'swiper/css';
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import SwiperOur from "./components/SwiperOur";

import Settling from "./components/Settling";

//import Faq from "./components/Faq";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Slider2 />

      <SwiperOur/>
      <Settling/>
    

      {/* <Faq/> */}

    </BrowserRouter>

  );
}

export default App;
