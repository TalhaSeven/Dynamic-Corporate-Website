import "./App.css";
import "swiper/css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HomeSlider2 from "./components/HomeSlider2";

// import Gallery from "./components/Gallery/Gallery";
// import Slider2 from "./components/Slider2";
// import SwiperOur from "./components/SwiperOur";
// import Settling from "./components/Settling";
import WayToLearn from "./components/WayToLearn";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
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

      <Footer />
      <Footer2 />
      {/* <Slider2 />
      <ContactForm />
      <Faq />
      <SwiperOur />
      <Settling />

      <WayToLearn/>
      <Table/>
      <Programs/>
      <OurTeachers/>


      <ProgramDetails />
      <BestFor />
      <Gallery/>
      <BreadCrumb /> */}
      <HomeSlider2 />
    </BrowserRouter>
  );
}

export default App;
