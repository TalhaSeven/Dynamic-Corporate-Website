import "./App.css";
import "swiper/css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-4 whitespace-nowrap text-center font-fredoka">
        Buraya bir şey eklemeyin arkadaşlar
      </h1>

    </BrowserRouter>
  );
}

export default App;
