import "./App.css";
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Faq from "./components/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider2 />
      {/* <Faq/> */}
    </BrowserRouter>
  );
}

export default App;
