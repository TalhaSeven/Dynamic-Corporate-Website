import "./App.css";
import 'swiper/css';
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import SwiperOur from "./components/SwiperOur";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>
        join
      </h1>
      <Slider2 />
      <SwiperOur/>
    
    </BrowserRouter>
  );
}

export default App;
