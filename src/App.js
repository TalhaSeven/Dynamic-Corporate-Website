import "./App.css";
import "swiper/css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Buraya bir şey eklemeyin arkadaşlar</h1>

    </BrowserRouter>
  );
}

export default App;
