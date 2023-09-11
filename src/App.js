import "./App.css";
import "swiper/css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import SwiperOur from "./components/SwiperOur";

import Settling from "./components/Settling";


import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

import Table from "./components/table/Table";
import Programs from "./components/programs/Programs";
import WayToLearn from "./components/WayToLearn";

=======
>>>>>>> main

// import Slider2 from "./components/Slider2";
// import SwiperOur from "./components/SwiperOur";
// import Settling from "./components/Settling";
// import WayToLearn from "./components/WayToLearn";
// import Faq from "./components/Faq";
// import ContactForm from "./components/ContactForm";
// import Table from "./components/table/Table";
// import BestFor from "./components/BestFor";
// import ProgramDetails from "./components/ProgramDetails";
// import Programs from "./components/programs/Programs";
// import BreadCrumb from "./components/BreadCrumb";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <h1>Buraya bir şey eklemeyin arkadaşlar</h1>
      {/* <Slider2 />
      <ContactForm />
      <Faq />
      <SwiperOur />
      <Settling />
      <ProgramDetails />
      <BestFor />
      <WayToLearn />
      <Table />
      <Programs />
      <BreadCrumb /> */}
    </BrowserRouter>
  );
}

export default App;
