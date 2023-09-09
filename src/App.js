import "./App.css";

import "swiper/css";
import Slider2 from "./components/Slider2";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import SwiperOur from "./components/SwiperOur";

import Settling from "./components/Settling";
import WayToLearn from "./components/WayToLearn";


import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

import Table from "./components/table/Table";


import BestFor from "./components/BestFor";
import ProgramDetails from "./components/ProgramDetails";

import Programs from "./components/programs/Programs";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Slider2 />
      <ContactForm/>

       <Faq/>
      <SwiperOur />
      <Settling />
      <ProgramDetails/>
      <BestFor/>

      <WayToLearn/>
      <Table/>
      <Programs/>

    </BrowserRouter>
  );
}

export default App;
