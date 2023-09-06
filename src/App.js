import "./App.css";
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>
        join
      </h1>
      <Slider2 />
    
    </BrowserRouter>
  );
}

export default App;
